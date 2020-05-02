let outgoingsDisplay = document.getElementById('outgoing-table');

//Functionality to pull bank accounts from database
let outgoingRequestResponseHandler = function() {
  let responseObject = JSON.parse(this.responseText)
  for (let outgoing of responseObject){
    let tablerow = document.createElement('tr')
    //Append Outgoing Name
    let outgoingName = document.createElement('td')
    outgoingName.innerText = outgoing.name
    tablerow.appendChild(outgoingName)
    //Append Description
    let outgoingDescript = document.createElement('td')
    outgoingDescript.innerText = outgoing.description
    tablerow.appendChild(outgoingDescript)
    //Append amount
    let outgoingPayment = document.createElement('td')
    outgoingPayment.innerText = outgoing.payment
    tablerow.appendChild(outgoingPayment)
    //Append delete button
    let deletebutton = document.createElement('button')
    deletebutton.innerText = "x"
    deletebutton.classList.add("outgoing-deletebuttons", "btn", "btn-outline-danger", "invisible")
    deletebutton.addEventListener('click', function(){
        //bankacc.id
        //functionality to delete from SQL database, then refresh
        let data = {outgoingid: outgoing.id};
        let deleteOutgoingRequest = new XMLHttpRequest();

        deleteOutgoingRequest.addEventListener("load", function(){
          document.location="/"
        });

        deleteOutgoingRequest.open("DELETE", '/outgoing');
        deleteOutgoingRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        deleteOutgoingRequest.send(JSON.stringify(data));
    })
    tablerow.appendChild(deletebutton)

    outgoingsDisplay.appendChild(tablerow)
  }
};

let outgoingRequest = new XMLHttpRequest();
outgoingRequest.addEventListener("load", outgoingRequestResponseHandler);
outgoingRequest.open("GET", "/outgoing");
outgoingRequest.send();


let outgoingDeleteReveal = document.getElementById('reveal-delete-buttons-outgoing')
let outgoingHidden = true;
let outgoingRevealButtonHandler = function(){
    if (outgoingHidden){
        let deleteButtons = document.getElementsByClassName("outgoing-deletebuttons");
        for (let button of deleteButtons){
            button.classList.remove('invisible')
        }
        outgoingHidden = false;
    } else {
        let deleteButtons = document.getElementsByClassName("outgoing-deletebuttons");
        for (let button of deleteButtons){
            button.classList.add('invisible')
        }
        outgoingHidden = true;
    }
}

outgoingDeleteReveal.addEventListener('click', outgoingRevealButtonHandler)