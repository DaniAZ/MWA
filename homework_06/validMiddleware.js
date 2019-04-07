module.exports=function(req,res,next){
    console.log(req.get('Content-Type'));
    if(req.get('Content-Type')!=='application/json'){
        console.log("request is not json")
    }else{
        next();
    }

}