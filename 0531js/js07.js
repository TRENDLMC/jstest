let x=5;
let y='five';
let isTrue=true;
let empty=null;
let nothing;
let sym=Symbol('me');//Symbol

let item={
    price:5000,
    count:10
}; //객체
let fruits=['apple','orange','kiwi']; //배열
let addFruit=function(fruit){
    fruits.push(fruit);
}//함수 펑션
addFruit('watermeoln');
console.log(fruits);