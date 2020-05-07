const bar = () => console.log('bar');

const baz = () => console.log('baz');

const sayHi = name => {
    console.log(`Hi ${name}`);
}

const foo = () => {
    setTimeout(sayHi, 2000, 'Joe');
    setTimeout(() => {
        console.log('Message after some time');
    }, 1000);
    console.log('foo');
    process.nextTick(() => {
        console.log('running in nextTick');
    })
    setTimeout(bar, 0);
    baz();
}

foo()

let count = 0
const inverval = setInterval(() => {
    count += 1;
    if (count == 10) {
        console.log(`Stop. We've reached ${count}`);
        clearInterval(inverval);
    }
    console.log(`count: ${count}`);

}, 10);

