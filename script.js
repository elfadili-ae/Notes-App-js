const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");


addBtn.addEventListener("click", addNote);

function addNote() {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="note-actions">
        <i class="save fas fa-floppy-disk"></i>
        <i class="delete fas fa-trash"></i>    
    </div>            
    <textarea></textarea>`

    const saveBtn = note.querySelector(".save");
    const deleteBtn = note.querySelector(".delete");
    const textArea = note.querySelector("textarea");

    saveBtn.addEventListener("click", saveNotes);
    textArea.addEventListener("input", saveNotes);
    deleteBtn.addEventListener("click", ()=>{
        note.remove();
        saveNotes();
    });

    main.appendChild(note);
}

function saveNotes() {
    const notes = document.querySelectorAll(".note textarea");
    const data = Array.from(notes).map(note => note.value);

    if (data.length === 0) {
        localStorage.removeItem("notes");
    }
    else {
        localStorage.setItem("notes", JSON.stringify(data));
    }
}

function loadNotes() {
    const data = JSON.parse(localStorage.getItem("notes"));

    if (data !== null) {
        data.forEach(element => {
            addNote();
            const notes = document.querySelectorAll(".note textarea");
            const lastNote = notes[notes.length - 1];
            lastNote.value = element;
        });
    }
}

loadNotes();