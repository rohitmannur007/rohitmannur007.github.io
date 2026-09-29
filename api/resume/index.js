const formidable = require("formidable");
const fs = require("fs/promises");

const OWNER = "rohitmannur007";
const REPO = "rohitmannur007.github.io";
const RESUME_PATH = "resume/current-resume.pdf";
const ORIGIN = "https://rohitmannur007.github.io";

function headers(res) {
  res.setHeader("Access-Control-Allow-Origin", ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-store");
}
function out(res, code, body) { headers(res); res.status(code).json(body); }

async function gh(path, init={}) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN is not configured");
  const r = await fetch("https://api.github.com"+path, {
    ...init,
    headers: {Accept:"application/vnd.github+json", Authorization:"Bearer "+token,
      "X-GitHub-Api-Version":"2022-11-28", ...(init.headers||{})}
  });
  const data = await r.json().catch(()=>({}));
  if (!r.ok) { const e=new Error(data.message||"GitHub API error"); e.status=r.status; throw e; }
  return data;
}
function parse(req) {
  const form = formidable({multiples:false,maxFiles:1,maxFileSize:10*1024*1024});
  return new Promise((resolve,reject)=>form.parse(req,(e,fields,files)=>e?reject(e):resolve({fields,files})));
}

module.exports = async (req,res) => {
  headers(res);
  if (req.method === "OPTIONS") return res.status(204).end();

  try {
    if (req.method === "GET") {
      const commits = await gh("/repos/"+OWNER+"/"+REPO+"/commits?path="+encodeURIComponent(RESUME_PATH)+"&per_page=1");
      const updated = commits[0]?.commit?.committer?.date || null;
      if (req.query?.action === "info") return out(res,200,{hasUpload:true,updated});
      res.statusCode=302;
      res.setHeader("Location","https://raw.githubusercontent.com/"+OWNER+"/"+REPO+"/main/"+RESUME_PATH+"?v="+Date.now());
      return res.end();
    }

    if (req.method !== "POST") return out(res,405,{detail:"Method not allowed"});
    if (!process.env.RESUME_UPDATE_PIN) return out(res,500,{detail:"RESUME_UPDATE_PIN is not configured"});

    const {fields,files}=await parse(req);
    const pin=String(Array.isArray(fields.pin)?fields.pin[0]:fields.pin||"").trim();
    if (pin !== process.env.RESUME_UPDATE_PIN) return out(res,401,{detail:"Wrong PIN. Try again."});

    const uploaded=Array.isArray(files.file)?files.file[0]:files.file;
    if (!uploaded) return out(res,400,{detail:"Choose a PDF first."});
    const bytes=await fs.readFile(uploaded.filepath);

    const existing=await gh("/repos/"+OWNER+"/"+REPO+"/contents/"+RESUME_PATH+"?ref=main");
    const result=await gh("/repos/"+OWNER+"/"+REPO+"/contents/"+RESUME_PATH,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({message:"Update resume from portfolio",content:bytes.toString("base64"),sha:existing.sha,branch:"main"})
    });
    return out(res,200,{ok:true,updated:new Date().toISOString(),commit:result.commit?.sha||null});
  } catch(e) {
    console.error(e);
    return out(res,e.status||500,{detail:e.message||"Upload failed. Try again."});
  }
};

module.exports.config={api:{bodyParser:false}};
