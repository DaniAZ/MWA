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
    const grade=grades.find(g=>g.id===parseInt(req.params.id))
    const index=grades.indexOf(grade)
      if(index>-1){
      grades.splice(index,1);
      }
      else{
          res.status(404).send('There is no Grade associated with this id');
      }
     res.send(grade);
});
module.exports=router;