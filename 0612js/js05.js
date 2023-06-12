const str='Carpe diem, seize the day';
console.log(`"e"는${str.indexOf('e')}번쨰 인덱스에있습니다.`);
console.log(`대문자"C"는${str.indexOf('C')}번쨰 인덱스에있습니다.`);
console.log(`소문자"c"는${str.indexOf('c')}번쨰 인덱스에있습니다.`);
console.log(`문자열", se"는${str.indexOf(', se')}번쨰 인덱스에있습니다.`);

const arr=['Carpe','diem','seize','the','day'];

const howManyHasE=(arr)=>{
    let count=0;
    arr.forEach((str)=>{
        if(str.indexOf('e') > -1)count++;
    });
    return count;
}

console.log(`${arr}에 "e"가있는 요소는 모두 ${howManyHasE(arr)}개 입니다.`);