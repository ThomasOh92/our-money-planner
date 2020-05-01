let newNoteButton = document.getElementById('add-new-note')
let noteBoard = document.getElementById('board')
let stickynotecounter = 1;



// Make the DIV element draggable:
dragElement(document.getElementById("note-1"));


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

let addNote = function(){
    stickynotecounter++;
    let newNote = document.createElement('div');
    let cookies = document.cookie.split(";");
    let currentpartner = cookies.filter(cookie => cookie.startsWith(' currentpartner'))[0].substring(16)
    newNote.innerHTML = `
                    <div class="note draggable" id="note-${stickynotecounter}">
                      <div class="note-header" id="note-${stickynotecounter}-header"></div>
                      <div class="text">
                          <textarea class="cnt" placeholder="Enter note description here"></textarea>
                                                <br />
                          <label class="current-partner-label">${currentpartner}</label>
                      </div>
                    </div>`
    noteBoard.appendChild(newNote)
    dragElement(document.getElementById(`note-${stickynotecounter}`));
}

function readStickyNoteData() {
    let numberOfStickyNotes = noteBoard.children.length;
    for (let i=0; i < numberOfStickyNotes; i++){
        console.log(noteBoard.children[i].children[0])
        //x and y coords
        console.log(noteBoard.children[i].getBoundingClientRect())
        //content
        console.log("content", noteBoard.children[i].children[0].children[1].children[0].value)
        //username
        console.log("username", noteBoard.children[i].children[0].children[1].children[2].innerText)
    }
}


newNoteButton.addEventListener('click', addNote)


let testButton = document.getElementById('test-button')
testButton.addEventListener('click', readStickyNoteData)