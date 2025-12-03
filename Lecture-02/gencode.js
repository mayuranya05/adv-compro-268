function genarateTempId(){
    const randomPart = Math.random().toString(36).substring(2, 8);
    return randomPart.toUpperCase();
}

const orderId = genarateTempId();
console.log(`You temporary order ID is: ${orderId}`);