console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN('Is it Number'));
console.log(Number.isNaN(0));
console.log(Number.isNaN(null));

console.log(Number.isNaN(-1));
console.log(Number.isNaN(0/0));
console.log(Number.isNaN(new Date()));
console.log(Number.isNaN(new Date().toString));
console.log(Number.isNaN('Infinity'));


function verifyNuber(n){
    if(Number.isNaN(n)||!n) return 0;
    return n;
}

const num1=verifyNuber(15);
const num2=verifyNuber(undefined);
const num3=verifyNuber(null);
const num4=verifyNuber(NaN);

console.log(num1+num2+num3+num4);