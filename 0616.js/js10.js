const numRegExp=/[0-9]+/;
const phoneRegExp=/\d{3}-\d{3,4}-\d{4}$/;
// //으로 묶고 안의 내용이 d는 정수 3개 -다음에 d는 정수\d는정수 3~4글자

const emailRegExp=/^([-_.]?[0-9a-zA-Z]{6,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i;
// 이거는  6~13자리 의앞자리와 @뒤에는 0~9까지a-z까지가능 하고자리제한은없고 마지막은.뒤에 2~3자리 영문만

console.log(numRegExp.test(12345));
console.log(numRegExp.test('test'));
console.log(phoneRegExp.test('010-3003-0046'));
console.log(phoneRegExp.test('02-8844-1234'));
console.log(emailRegExp.test('test123@javascript.org'));
console.log(emailRegExp.test('test-javascript'));
