const event=require('events');
const eventEmitter=new event.EventEmitter();

const myEventHandler=()=>{{
    console.log('I hear a scream!');
}}
eventEmitter.on('scream',myEventHandler);

eventEmitter.emit('scream');

const connectionHandler=()=>{
    console.log('connection successful');
    eventEmitter.emit('data_received');
}
eventEmitter.on('connection',connectionHandler);

eventEmitter.on('data_received',()=>{
    console.log('data received successfully');
})
eventEmitter.emit('connection');

console.log('Program Ended');
