function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunningOperation() {
    return 42;
}

async function run() {
    console.log("Start!!");
    await promiseTimeout(3000);
    const result = await longRunningOperation();
    console.log("Result", result);
    console.log("Stop!");
}
console.log("Before run");
run();
console.log("After run");