function createCounterclosure(){
    let count=0;
    return{
        increase:()=>{
            count++;
        },
        getCount:()=>{
            return count;
        }
    };
}

const counter1=createCounterclosure();
const counter2=createCounterclosure();

counter1.increase();
counter1.increase();

console.log('counter1의값'+counter1.getCount());

counter2.increase();

console.log('counter2의값'+counter2.getCount());