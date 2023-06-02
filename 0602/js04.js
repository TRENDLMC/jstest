let condition=5>10;
condition?console.log('Left'):console.log('Right');
let result=condition?(
    console.log("삼항 연산식의 첫 번째 표현식 입니다."),
    "표현식1"
):(
    console.log("삼항연산식의 두번 쟤 표현식 입니다."),
    "표현식2"
);
console.log(result);