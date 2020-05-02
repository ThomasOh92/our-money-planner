let othersDisplay = document.getElementById('other-table');

//Functionality to pull bank accounts from database
let otherRequestResponseHandler = function() {
  let responseObject = JSON.parse(this.responseText)
  for (let other of responseObject){
    let tablerow = document.createElement('tr')
    //Append other Name
    let otherTitle = document.createElement('td')
    otherTitle.innerText = other.title
    tablerow.appendChild(otherTitle)
    //Append Comments
    let otherComment = document.createElement('td')
    otherComment.innerText = other.comments
    tablerow.appendChild(otherComment)
    //Append delete button
    let deletebutton = document.createElement('button')
    deletebutton.innerText = "x"
    deletebutton.classList.add("other-deletebuttons", "btn", "btn-outline-danger", "invisible")
    deletebutton.addEventListener('click', function(){
        //bankacc.id
        //functionality to delete from SQL database, then refresh
        let data = {otherid: other.id};
        let deleteotherRequest = new XMLHttpRequest();

        deleteotherRequest.addEventListener("load", function(){
          document.location="/"
        });

        deleteotherRequest.open("DELETE", '/other');
        deleteotherRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        deleteotherRequest.send(JSON.stringify(data));
    })
    tablerow.appendChild(deletebutton)

    othersDisplay.appendChild(tablerow)
  }
};

let otherRequest = new XMLHttpRequest();
otherRequest.addEventListener("load", otherRequestResponseHandler);
otherRequest.open("GET", "/other");
otherRequest.send();


let otherDeleteReveal = document.getElementById('reveal-delete-buttons-other')
let otherHidden = true;
let otherRevealButtonHandler = function(){
    if (otherHidden){
        let deleteButtons = document.getElementsByClassName("other-deletebuttons");
        for (let button of deleteButtons){
            button.classList.remove('invisible')
        }
        otherHidden = false;
    } else {
        let deleteButtons = document.getElementsByClassName("other-deletebuttons");
        for (let button of deleteButtons){
            button.classList.add('invisible')
        }
        otherHidden = true;
    }
}

otherDeleteReveal.addEventListener('click', otherRevealButtonHandler)