
// Middle element in linked list.
const List = require('./LinkedList');

function getMiddleElement(list) {
    let middleElement = list.head,
        curNode = list.head,
        i = 0;

    while (curNode.next) {
        if (i++ % 2 === 0) middleElement = middleElement.next;
        curNode = curNode.next;
    }

    return middleElement;
}

console.log(getMiddleElement(new List(1, 2, 3, 4, 5))); // => 3