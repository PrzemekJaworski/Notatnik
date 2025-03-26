// Selecting elements
const addBtn = document.querySelector(".add");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const deleteAllBtn = document.querySelector(".delete-all");
const noteArea = document.querySelector(".note-area");
const notePanel = document.querySelector(".note-panel");
const category = document.querySelector("#category");
const textarea = document.querySelector("#text");
const error = document.querySelector(".error");

let selectedValue;
let cardID = 0;

// 📝 Open the note panel
const openPanel = () => {
  notePanel.style.display = "flex";
};

// 📝 Close the note panel
const closePanel = () => {
  notePanel.style.display = "none";
  error.style.visibility = "hidden";
  textarea.value = "";
  category.selectedIndex = 0;
};

// 📝 Add a new note
const addNote = () => {
  if (
    textarea.value !== "" &&
    category.options[category.selectedIndex].value !== "0"
  ) {
    createNote();
    error.style.visibility = "hidden";
  } else {
    error.style.visibility = "visible";
  }
};

// 📝 Create a note element
const createNote = () => {
  const newNote = document.createElement("div");
  newNote.classList.add("note");
  newNote.setAttribute("id", cardID);

  newNote.innerHTML = `
        <div class="note-header">
            <h3 class="note-title">${selectedValue}</h3>
            <button class="delete-note" onclick="deleteNote(${cardID})"><i class="fas fa-times icon"></i></button>
        </div>
        <div class="note-body">${textarea.value}</div>
    `;

  noteArea.appendChild(newNote);
  cardID++;
  textarea.value = "";
  category.selectedIndex = 0;
  notePanel.style.display = "none";
  checkColor(newNote);
};

// 📝 Get selected category
const selectValue = () => {
  selectedValue = category.options[category.selectedIndex].text;
};

// 📝 Assign color based on category
const checkColor = note => {
  switch (selectedValue) {
    case "Zakupy":
      note.style.backgroundColor = "#ECEAB1";
      break;
    case "Praca":
      note.style.backgroundColor = "#FCC666";
      break;
    case "Inne":
      note.style.backgroundColor = "#4AD2C8";
      break;
  }
};

// 📝 Delete a single note
const deleteNote = id => {
  const noteToDelete = document.getElementById(id);
  noteArea.removeChild(noteToDelete);
};

// 📝 Delete all notes
const deleteAllNotes = () => {
  noteArea.textContent = "";
};

// Event listeners
addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", addNote);
deleteAllBtn.addEventListener("click", deleteAllNotes);
