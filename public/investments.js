let investmentDisplay = document.getElementById('investment-table');

//Functionality to pull bank accounts from database
let investmentRequestResponseHandler = function() {
  let responseObject = JSON.parse(this.responseText)
  for (let investment of responseObject){
    let tablerow = document.createElement('tr')
    //Append Investment Name
    let investmentName = document.createElement('td')
    investmentName.innerText = investment.name
    tablerow.appendChild(investmentName)
    //Append Description
    let investmentDescript = document.createElement('td')
    investmentDescript.innerText = investment.description
    tablerow.appendChild(investmentDescript)
    //Append value
    let amount = document.createElement('td')
    amount.innerText = "$" + investment.value
    tablerow.appendChild(amount)
    //Append delete button
    let deletebutton = document.createElement('button')
    deletebutton.innerText = "x"
    deletebutton.classList.add("investment-deletebuttons", "btn", "btn-outline-danger", "invisible")
    deletebutton.addEventListener('click', function(){
        //functionality to delete from SQL database, then refresh
        let data = {investmentid: investment.id};
        let deleteInvestmentRequest = new XMLHttpRequest();

        deleteInvestmentRequest.addEventListener("load", function(){
          document.location="/"
        });

        deleteInvestmentRequest.open("DELETE", '/investment');
        deleteInvestmentRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        deleteInvestmentRequest.send(JSON.stringify(data));
    })
    tablerow.appendChild(deletebutton)

    investmentDisplay.appendChild(tablerow)
  }
  //Append children to bankAccDisplay with a loop
};
let investmentRequest = new XMLHttpRequest();
investmentRequest.addEventListener("load", investmentRequestResponseHandler);
investmentRequest.open("GET", "/investment");
investmentRequest.send();


let investmentDeleteReveal = document.getElementById('reveal-delete-buttons-investment')
let investmentHidden = true;
let investmentRevealButton = function(){
    if (investmentHidden){
        let deleteButtons = document.getElementsByClassName("investment-deletebuttons");
        for (let button of deleteButtons){
            button.classList.remove('invisible')
        }
        investmentHidden = false;
    } else {
        let deleteButtons = document.getElementsByClassName("investment-deletebuttons");
        for (let button of deleteButtons){
            button.classList.add('invisible')
        }
        investmentHidden = true;
    }
}

investmentDeleteReveal.addEventListener('click', investmentRevealButton)