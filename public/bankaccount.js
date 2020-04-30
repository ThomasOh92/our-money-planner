let bankAccDisplay = document.getElementById('bank-acc-table');

//Functionality to pull bank accounts from database
let bankAccRequestResponseHandler = function() {
  let responseObject = JSON.parse(this.responseText)
  console.log(responseObject)
  for (let bankacc of responseObject){
    let tablerow = document.createElement('tr')
    //Append Bank Name
    let bankName = document.createElement('td')
    bankName.innerText = bankacc.bank
    tablerow.appendChild(bankName)
    //Append Description
    let bankDescript = document.createElement('td')
    bankDescript.innerText = bankacc.accountdescription
    tablerow.appendChild(bankDescript)
    //Append amount
    let amount = document.createElement('td')
    let balance = parseFloat(bankacc.amount)
    balance = balance.toLocaleString('en-US', {minimumFractionDigits: 2});
    amount.innerText = "$" + balance
    tablerow.appendChild(amount)
    //Append delete button
    let deletebutton = document.createElement('button')
    deletebutton.innerText = "x"
    deletebutton.classList.add("deletebuttons", "btn", "btn-outline-danger", "invisible")
    deletebutton.addEventListener('click', function(){
        //bankacc.id
        //functionality to delete from SQL database, then refresh
        let data = {bankaccid: bankacc.id};
        let deleteBankAccRequest = new XMLHttpRequest();

        deleteBankAccRequest.addEventListener("load", function(){
          document.location="/"
        });

        deleteBankAccRequest.open("DELETE", '/bankaccount');
        deleteBankAccRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        deleteBankAccRequest.send(JSON.stringify(data));
    })
    tablerow.appendChild(deletebutton)

    bankAccDisplay.appendChild(tablerow)
  }
  //Append children to bankAccDisplay with a loop
};
let bankAccRequest = new XMLHttpRequest();
bankAccRequest.addEventListener("load", bankAccRequestResponseHandler);
bankAccRequest.open("GET", "/bankaccount");
bankAccRequest.send();


let bankAccDeleteReveal = document.getElementById('reveal-delete-buttons-bankacc')
let hidden = true;
let revealButtons = function(){
    if (hidden){
        let deleteButtons = document.getElementsByClassName("deletebuttons");
        for (let button of deleteButtons){
            button.classList.remove('invisible')
        }
        hidden = false;
    } else {
        let deleteButtons = document.getElementsByClassName("deletebuttons");
        for (let button of deleteButtons){
            button.classList.add('invisible')
        }
        hidden = true;
    }
}

bankAccDeleteReveal.addEventListener('click', revealButtons)