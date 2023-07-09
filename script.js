const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");


addBtn.addEventListener("click", addNote);

function addNote() {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="note-actions">
        <i class="fas fa-floppy-disk"></i>
        <i class="fas fa-trash"></i>    
    </div>            
    <textarea></textarea>`

    main.appendChild(note);
}