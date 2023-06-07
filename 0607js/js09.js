function Teacher(name,age,subject){
    this.name=name;
    this.age=age;
    this.subject=subject;
    this.teach=function (studunt){
        console.log(studunt+'에게'+this.subject+'를가르칩니다');
    };
}


const jay=new Teacher('jay',30,'javaScript');
console.log(jay);
jay.teach('bbo');


console.log(jay.constructor);

console.log(jay instanceof Teacher);

const jay2=Teacher('jay',30,'javaScript');
console.log(jay2);
console.log(age);