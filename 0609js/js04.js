function callRoll(student){
    if(!Array.isArray(student))return;


    students.forEach((student)=>{
        console.log(`Are you here,${student}`);
    });
}


const students=['jun','ali','murry','toby'];
callRoll(students);

