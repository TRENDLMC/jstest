const studenProto={
    gainExp:function(){
        this.exp++;
    }
}
const harin={
    name:'하린',
    age:10,
    exp:0,
    __proto__:studenProto
};
const bbo={
    name:'뽀',
    age:20,
    exp:10,
    __proto__:studenProto
};
bbo.gainExp();
harin.gainExp();
harin.gainExp();
console.log(harin);
console.log(bbo);