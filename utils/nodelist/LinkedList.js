const ListNode = require("./ListNode")

class LinkedList {
  constructor() {
    // 头指针
    this.head = null;
    this.length = 0;
  }

  append(element) {
    let listnode = new ListNode(element);
    let current = null;

    if (this.head === null) {
      this.head = listnode;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = listnode;
    }
    this.length++;
  }

  insert(position, element) {
    position--;
    if (position >= 0 && position <= this.length) {
      let listnode = new ListNode(element);
      let current = this.head;
      let previous = null;
      let index = 0;
      if (position === 0) {
        this.head = listnode;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        listnode.next = current;
        previous.next = listnode;
      }
      this.length++;
      return true
    }
    return false
  }

  removeAt(position) {
    if (position > -1 && position < length) {
      let current = this.head;
      let previous = null;
      let index = 0;
      if (position === 0) {
        this.head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    }
    return null
  }

  findIndex(element) {
    let current = this.head;
    let index = -1;
    while (current) {
      if (element === current.element) {
        return index + 1;
      }
      index++;
      current = current.next;
    }

    return -1;
  }

  remove(element) {
    let index = this.findIndex(element);
    return removeAt(index);
  }

  isEmpty() {
    return !this.length;
  }

  size() {
    return this.length;
  }

  toString() {
    if (!this.length) {
      return "null"
    }
    let current = this.head;
    let string = '';
    while (current) {
      string += `${current.element} `;
      current = current.next;
    }
    return string;
  }
}
