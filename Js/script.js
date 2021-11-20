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

//❤️Text area gets automatically focus when the page is loaded for the first time.
textArea.focus();

//❤️Text area gets automatically focus when the 'New' list element is clicked!.
clearTextArea.addEventListener("click", function () {
  textArea.focus();
});

// event listner for input in  text area
textArea.addEventListener("input", (e) => {
  textArea.value = e.target.value;
});
