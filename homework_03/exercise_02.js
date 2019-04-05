const EventEmitter=require('events');

class Gym extends EventEmitter{}
const gym= new Gym();
setInterval(()=>gym.emit('boom'),1000);
gym.on('boom',()=>console.log("athlete is working out"));




