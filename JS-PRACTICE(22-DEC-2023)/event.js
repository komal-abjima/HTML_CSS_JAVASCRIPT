import EventEmitter from "node:events";
const emitter = new EventEmitter()

emitter.on('hello', message =>{
    console.log(`Event handled: ${message}`);

});
setTimeout(() => {
    emitter.emit('hello', "This is a message..");
}, 3000);