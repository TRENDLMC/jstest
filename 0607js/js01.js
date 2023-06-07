if(true){
    var funtionScopeValue='global';
    let blockScopeValue='local';
}
console.log(funtionScopeValue);
//console.log(blockScopeValue);

//var는 전역변수
//let는 지역변수구나


let value='바깥값';
if(true){
    console.log(value);
    let value='안쪽값';
}