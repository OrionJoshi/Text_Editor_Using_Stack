// stack class
class Stack {
  constructor() {
    this.stack = [];
    this.size = -1;
  }
  // check for empty stack
  isEmpty() {
    return this.size === -1;
  }
  // clear the stack
  clear() {
    this.stack = [];
    this.size = -1;
  }
  // pop
  pop() {
    if (!this.isEmpty()) {
      return this.stack[this.size--];
    } else {
      return [-1, ""];
    }
  }
  // push
  push(mode, text) {
    // mode 0 => insert
    // mode 1 => delete
    if (this.isEmpty()) {
      this.size += 1;
      this.stack[this.size] = [mode, text];
    } else {
      if (text == " ") {
        this.stack[++this.size] = [mode, " "];
      } else {
        let tempArr = this.stack[this.size];

        let prevMode = tempArr[0];
        let chr = tempArr[1];

        if (prevMode == mode && chr != " ") {
          this.stack[this.size] = [mode, chr + text];
        } else {
          this.stack[++this.size] = [mode, text];
        }
      }
    }
    console.log(this.stack);
  }
}
