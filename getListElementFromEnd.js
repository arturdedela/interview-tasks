const List = require('./LinkedList');

function getListElementFromEnd(list, i) {
    let el = list.head,
        mainPtr = list.head;
    while (i--) mainPtr = mainPtr.next; // Find offset

    while (mainPtr.next) {
        el = el.next;
        mainPtr = mainPtr.next;
    }

    return el;
}

const list = new List(1, 2, 3, 4, 5, 6);

console.log(getListElementFromEnd(list, 4)); // => 2
console.log(getListElementFromEnd(list, 0)); // => 6