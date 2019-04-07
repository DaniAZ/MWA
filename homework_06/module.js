module.exports=(function(){
    let generateID=0;
const GradeEntity=class Grade{
        constructor(name,course,grade){
            this.id=generateID++;
            this.name=name;
            this.course=course;
            this.grade=grade;
        }
    }
    return GradeEntity;
})();