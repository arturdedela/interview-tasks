

function ListNode(v, next) {
    this.value = v || undefined;
    this.next = next || null;
}

function List(...values) {
    this.head = null;
    values.reverse().forEach(v => this.head = new ListNode(v, this.head));
}

// List iterator
List.prototype[Symbol.iterator] = function* () {
    if (!this.head) {
        return;
    }
    let node = this.head;
    while (node) {
        yield node.value;
        node = node.next;
    }
};

module.exports = List;