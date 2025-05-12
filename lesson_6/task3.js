function checkOrder (available, ordered) {
    if (ordered > available) {
        return "Your order is too large. We don't have enough goods."
    } else if (ordered === 0) {
        return "Your order is empty."
    } else {
        return "Your order is accepted."
    }
}
console.log(checkOrder(100, 50));
console.log(checkOrder(100, 130)); 
console.log(checkOrder(100, 0)); 

