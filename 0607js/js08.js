const teacherJay={
    name:'제이',
    age:30,
    teacherJavascript:function(student){
        student.gainExp();
    }
}

const studentBbo={
    name:'뽀',
    age:20,
    exp:0,
    gainExp:function (){
        this.exp++;
    }
}

console.log(studentBbo.exp);
teacherJay.teacherJavascript(studentBbo);
console.log(studentBbo.exp);