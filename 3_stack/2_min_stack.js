class MinStack {
    constructor() {
      this.stack = []; // main stack
      this.minStack = []; // track minimums
    }
    push(val) {
      this.stack.push(val); // push to main stack
      if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) this.minStack.push(val); // push to min stack if new min
    }
    pop() {
      let removed = this.stack.pop(); // remove top element
      if (removed === this.minStack[this.minStack.length - 1]) this.minStack.pop(); // sync min stack if needed
    }
    top() {
      let value = this.stack[this.stack.length - 1]; // get last element
      return value; // single return
    }
    getMin() {
      let min = this.minStack[this.minStack.length - 1]; // current minimum
      return min; // single return
    }
  }