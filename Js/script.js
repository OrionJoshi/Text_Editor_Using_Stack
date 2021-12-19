document.onkeydown = (event) => {
  if (event.ctrlKey || event.metaKey) {
    event.preventDefault;
  }
};

onload = function () {
  // variables
  const clearTextArea = document.getElementById("new");
  const undo = document.getElementById("undo");
  const redo = document.getElementById("redo");
  const save = document.getElementById("save");
  const textArea = document.getElementById("text-area");

  const undoStack = new Stack();
  const redoStack = new Stack();

  //

  // preserve the cursor at the end of the text
  textArea.addEventListener("click", () => {
    textArea.selectionStart = textArea.selectionEnd = textArea.value.length;
  });

  // event listner for clear text area
  clearTextArea.addEventListener("click", () => {
    textArea.value = "";
    undoStack.clear();
    redoStack.clear();
  });

  // event listner for input in  text area
  textArea.addEventListener("input", (e) => {
    textArea.value = e.target.value;
    undoStack.push(0, e.data);
  });

  // undo click event
  undo.addEventListener("click", () => {
    let popArr = undoStack.pop();
    if (popArr[0] === -1) {
      console.log("Editor empty");
    } else {
      redoStack.push(popArr[0] == 0 ? 1 : 0, popArr[1]);
      delLen = popArr[1].length;
      subLen = textArea.value.length;
      textArea.value = textArea.value.substring(0, subLen - delLen);
    }
  });

  // redo click event
  redo.addEventListener("click", () => {
    let popArr = redoStack.pop();
    console.log(popArr);
    if (popArr[0] === -1) {
      console.log("Editor empty");
    } else {
      undoStack.push(popArr[0] == 0 ? 1 : 0, popArr[1]);
      delLen = popArr[1];
      subLen = textArea.value.length;
      textArea.value = textArea.value + delLen;
    }
  });
};
