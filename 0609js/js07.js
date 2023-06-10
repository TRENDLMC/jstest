const sentences=['    ABC abc','ABC  abc     ', `first
second third
         forth
sentene
 
 `];
 const filterSentence=(sentences)=>{
    const filtered=[];
    sentences.forEach(s=>{
        filtered.push(s.trim());
    });
    return filtered;
 }

 console.log(filterSentence(sentences));