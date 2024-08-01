const order = {
    vanilla: 0,
    chocolate: 0,
    coffee: 0,
    strawberry: 0
}

console.log(order);

// const flavor = "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
const flavor = prompt("Put orders here!")

function onlineOrder(froyo) {
    const splitUp = froyo.split(",");
    for (i = 0; i < splitUp.length; i++) {
        if (splitUp[i] in order) {
            order[splitUp[i]] += 1  
        }
    }
return order
}
console.log(onlineOrder(flavor));