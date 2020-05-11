const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('error', (err) => {
    console.error('whoops! there was an error');
});

const callback = () => {
    console.log("I'm a callback");
}

eventEmitter.on('start', callback);
eventEmitter.on('start', (start, end) => {
    console.log(`started between ${start} and ${end}`)
})
eventEmitter.emit('start', 1, 100)
eventEmitter.emit('start', 3, 5)

eventEmitter.once('load', () => {
    console.log(`loading happens just once...`)
})
// emitting twice but will run just once
eventEmitter.emit('load')
eventEmitter.emit('load')

eventEmitter.removeListener('start', callback)
eventEmitter.emit('start', 6, 10)



