const Emitter=require('events');
const eventConfig=require('./js08_1').events;
const em=new Emitter();

em.on(eventConfig.GREET,()=>{
    console.log('Somewhere, someone said heelo.');
});

em.on(eventConfig.GREET,()=>{
    console.log('A Greetion occurred!');
});

em.emit(eventConfig.GREET);