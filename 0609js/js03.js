console.log(Number.isInteger(0));
console.log(Number.isInteger(-1));
console.log(Number.isInteger(77777777777777777777777));
console.log(Number.isInteger(null));
console.log(Number.isInteger(0/0));
console.log(Number.isInteger('Infinity'));
console.log(Number.isInteger(true));
console.log(Number.isInteger({}));


function verifyIntefer(n) {
    if(!Number.isInteger(n))return 0;
    return n;
}

const num1=verifyIntefer(15);
const num2=verifyIntefer(Infinity);
const num3=verifyIntefer(0.05);
console.log(num1,num2,num3);