function removeFromArray(array, value) {
    var index = array.indexOf(value);
    if (index !== -1) {
        array.splice(index, 1);
        return true;
    } else {
        return false;
    }
}

function printList(array) {
    for (var i = 0; i < array.length; i++) {
        app.print(array[i]);
        if (i === array.length - 2) {
            app.print(`, and `);
        } else if (i < array.length - 1) {
            app.print(`, `);
        }
    }
    app.println(`.`);
}

function hasItem(item) {
    return inventory.includes(item)
        || playLocation.items.includes(item) && !item.pickUpNeeded;
}

function chooseRandom(array) {
    var index = Math.floor(Math.random() * array.length);
    return array[index];
}

function hallucinate(level) {
    var threshold = insanityThresholds[level];
    return Math.random() * insanity > threshold;
}