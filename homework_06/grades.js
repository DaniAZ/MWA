const express=require('express');
const router= express.Router();
const Grade=require('./module');

const grades=[]
router.get('/',(req,res)=>{
      res.json(grades);
})
router.post('/',(req,res)=>{
    grades.push(new Grade(req.body.name,req.body.course,req.body.grade));
    res.json(grades);   
})
router.delete('/:id',(req,res)=>{
     const uid=req.params.id;
    let x='';
      for(let i=0;i<grades;i++){
          if(grades[i].id===uid){
               x=i;
               break;
          }
      }
      if(uid>-1){
      grades.splice(x,1);
      }
     res.send(grades);
});
module.exports=router;