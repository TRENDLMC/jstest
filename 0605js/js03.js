const symbol = Symbol();
const hello = Symbol('hello');

console.log(Number(3)===Number(3));
console.log(Symbol('symbol')==Symbol('symbol'));
console.log(Symbol()===Symbol());
console.log(typeof Symbol());

const nationlity=Symbol('nationility');
const user={
    name:'jay'
};
user[nationlity]='korean';
console.log(user[nationlity]);

for(let key in user){
    console.log(key);
}
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));

const symbolProperties =Object.getOwnPropertySymbols(user);
console.log(symbolProperties);
console.log(user[symbolProperties[0]]);
