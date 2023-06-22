const map=new Map();

map.set('one',1);
map.set('two',2);

console.log('키정보만 출력합니다');

for(let key of map.keys()){
    console.log(key);
}

console.log('값만 출력합니다');
for(let values of map.values()){
    console.log(values);
}

console.log('[for..of,entries] 키,값 정보를 동시에 출력합니다');
for(let [key,value] of map.entries()){
    console.log(`키는${key}, 값은 ${value}입니다`);
}
console.log('[for..of]키,값 정보를 동시에출력합니다');
for(let [key,value] of map){
    console.log(`키는${key}, 값은 ${value}입니다`);
}
console.log('[forEach]키값 정보를 동시에 출력합니다');
map.forEach((value,key) => {
    console.log(`키는${key}, 값은 ${value}입니다`);
})