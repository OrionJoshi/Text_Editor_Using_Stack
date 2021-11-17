class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }
  // check for empty stack
  isEmpty() {
    return this.size === 0;
  }
  // clear the stack
  clear() {
    this.stack = [];
    this.size = 0;
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
  push(text, mode) {
    // mode 0 => insert
    // mode 1 => delete
    if (this.isEmpty()) {
      if (mode == 0) {
        this.stack[this.size] = [mode, text];
      }
    } else {
      if (text == " ") {
        this.stack[++this.size] = [mode, " "];
      } else {
        let tempArr = this.stack[this.size];
        let chr = tempArr[1];
        let prevMode = tempArr[0];

        if (prevMode == mode && chr != " ") {
          this.stack[this.size] = [mode, chr + text];
        } else {
          this.stack[++this.size] = [mode, text];
        }
      }
    }
  }
}
