const handler=require("./index"); module.exports=async(req,res)=>{req.query={...(req.query||{}),action:"info"};return handler(req,res)};
