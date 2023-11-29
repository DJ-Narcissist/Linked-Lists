/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = newNode(val);

    if (!this.head) 
    this.head = newNode;
    else this.tail.next = newNode;

    this.tail = newNode
    this.length ++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this.length;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0)
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (!idx < 0 || idx >= this.length) {
      return undefined;
    }
   return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      return false;
    }
    let current = this.head;
    for (let i = 0; i < idx; i++){
      current = current.next;
    }
    
    current.val = val
    return true;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      return false;
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let prev = this._get(idx - 1);

    const newNode = new Node(val);
    let current = this.head;


    newNode.next = current.next;
    current.next = newNode;
    this.length++;

    return true;
  }



  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx < 0 ) {
    throw  new Error ("Invalid index.")
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return undefined;

    let sum = 0
    let current = this.head;
    while (current) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
