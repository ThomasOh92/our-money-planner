let newNoteButton = document.getElementById('add-new-note')
let noteBoard = document.getElementById('board')
let stickynotecounter = 0;

//Deleting a single note on the front-end
let deleteNote = function() {
    let noteToDelete = this.parentNode.parentNode.parentNode;
    noteToDelete.parentNode.removeChild(noteToDelete);
}

//Getting sticky note data from database
let stickyNotesRequestResponseHandler = function() {
  let responseObject = JSON.parse(this.responseText)
  for (let el of responseObject){
    stickynotecounter++;
    let newNote = document.createElement('div');
    newNote.innerHTML = `
                    <div class="note draggable" id="note-${stickynotecounter}">
                      <div class="note-header" id="note-${stickynotecounter}-header">
                            <span class="badge badge-pill badge-danger note-delete-buttons" id="note-${stickynotecounter}-delete">x</span>
                      </div>
                      <div class="text">
                          <textarea class="cnt" placeholder="Enter note description here">${el.content}</textarea>
                                                <br />
                          <label class="current-partner-label">${el.username}</label>
                      </div>
                    </div>`
    newNote.children[0].style.position = "absolute";
    newNote.children[0].style.left = el.xcoord+'px';
    newNote.children[0].style.top = el.ycoord+'px';
    newNote.children[0].children[1].children[0].style.height = el.height;
    newNote.children[0].children[1].children[0].style.width = el.width;
    noteBoard.appendChild(newNote)
    document.getElementById(`note-${stickynotecounter}-delete`).addEventListener('click', deleteNote)
    dragElement(document.getElementById(`note-${stickynotecounter}`));
  }
};
let stickyNotesRequest = new XMLHttpRequest();
stickyNotesRequest.addEventListener("load", stickyNotesRequestResponseHandler);
stickyNotesRequest.open("GET", "/stickynote");
stickyNotesRequest.send();


// Make the DIV element draggable:
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "-header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.pageX;
    pos4 = e.pageY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.pageX;
    pos2 = pos4 - e.pageY;
    pos3 = e.pageX;
    pos4 = e.pageY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//Adding a single note on the front-end
let addNote = function(){
    stickynotecounter++;
    let newNote = document.createElement('div');
    let cookies = document.cookie.split(";");
    let currentpartner = cookies.filter(cookie => cookie.startsWith(' currentpartner'))[0].substring(16)
    newNote.innerHTML = `
                    <div class="note draggable" id="note-${stickynotecounter}">
                      <div class="note-header" id="note-${stickynotecounter}-header">
                        <span class="badge badge-pill badge-danger note-delete-buttons" id="note-${stickynotecounter}-delete">x</span>
                      </div>
                      <div class="text">
                          <textarea class="cnt" placeholder="Enter note description here"></textarea>
                                                <br />
                          <label class="current-partner-label">${currentpartner}</label>
                      </div>
                    </div>`
    noteBoard.appendChild(newNote)
    document.getElementById(`note-${stickynotecounter}-delete`).addEventListener('click', deleteNote)
    dragElement(document.getElementById(`note-${stickynotecounter}`));
}
newNoteButton.addEventListener('click', addNote)

//Saving all sticky note data to databse
let stickyNoteTransferData = []
let saveStickyNoteData = async () => {
    //Reading all the necessary information about sticky notes
    let numberOfStickyNotes = noteBoard.children.length;
    for (let i=0; i < numberOfStickyNotes; i++){
        let stickyNote = {}
        stickyNote.xcoord = await noteBoard.children[i].children[0].offsetLeft;
        stickyNote.ycoord =  await noteBoard.children[i].children[0].offsetTop;

        stickyNote.width = noteBoard.children[i].children[0].children[1].children[0].style.width;
        stickyNote.height = noteBoard.children[i].children[0].children[1].children[0].style.height;

        stickyNote.content = noteBoard.children[i].children[0].children[1].children[0].value;
        stickyNote.username = noteBoard.children[i].children[0].children[1].children[2].innerText
        stickyNoteTransferData.push(stickyNote)
    }

    //AJAX request out
    let stickyNoteSaveRequest = new XMLHttpRequest();

    stickyNoteSaveRequest.addEventListener("load", function(){
      alert('saved!')
    });

    stickyNoteSaveRequest.open("POST", '/stickynote');
    stickyNoteSaveRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    stickyNoteSaveRequest.send(JSON.stringify(stickyNoteTransferData))
}
let saveButton = document.getElementById('save-button')
saveButton.addEventListener('click', saveStickyNoteData)