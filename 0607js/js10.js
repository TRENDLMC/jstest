function Storage(){
    this.dataStore={};
}

Storage.prototype.put=function(key,data){
    this.dataStore[key]=data;
}
Storage.prototype.getData=function (key){
return this.dataStore[key];
}



const productStorage=new Storage();
productStorage.put('id001',{name:'키보드',price:2000});

console.log(productStorage.getData('id001'));

function RemovableStorage(){
    Storage.call(this);
}

RemovableStorage.prototype=Object.create(Storage.prototype);
RemovableStorage.prototype.remobeAll=function (){
    this.dataStore={}
}
const productStorage2=new RemovableStorage();
productStorage2.put('id001',{nama:'키보드',price:2000});
productStorage2.remobeAll();
const item2=productStorage2.getData('id001');
console.log(item2);