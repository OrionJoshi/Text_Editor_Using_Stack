// variables
const clearTextArea = document.getElementById("new");
const undo = document.getElementById("undo");
const redo = document.getElementById("redo");
const save = document.getElementById("save");
const textArea = document.getElementById("text-area");

// event listner for clear text area
clearTextArea.addEventListener("click", () => {
  textArea.value = "";
});

// event listner for input in  text area
textArea.addEventListener("input", (e) => {
  textArea.value = e.target.value;
});
