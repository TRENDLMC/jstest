const numarr1=[2,0,3,4,1];
const numarr2=[2,0,3,4,1];

const objarr=[
    {id:2 ,name:'Leo'},
    {id:0 ,name:'Daniel'},
    {id:3 ,name:'Asher'},
    {id:4 ,name:'Chloe'},
    {id:4 ,name:'Chloe'},
];

numarr1.sort((a,b)=>{
    return a-b;
});

numarr2.sort((a,b)=>{
    return b-a;
});

objarr.sort((a,b)=>{
    if(a.name>b.name){
        return 1;
    }else if(b.name>a.name){
        return -1;
    }else{
        return 0;
    }
});

console.log(`오름차순:${numarr1}`);
console.log(`오름차순:${numarr2}`);
console.log(objarr);