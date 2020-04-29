let partnerAButton = document.getElementById('partner-a-button')
let partnerBButton = document.getElementById('partner-b-button')
let partnerADisplay = document.getElementById('partner-a-income')
let partnerBDisplay = document.getElementById('partner-b-income')
let partnerAreadOnly = true;
let partnerBreadOnly = true

//Functionality to pull income from database
let incomeRequestResponseHandler = function() {
  let responseObject = JSON.parse(this.responseText)
  partnerADisplay.value = responseObject.partnerAIncome;
  partnerBDisplay.value = responseObject.partnerBIncome;
};
let incomeRequest = new XMLHttpRequest();
incomeRequest.addEventListener("load", incomeRequestResponseHandler);
incomeRequest.open("GET", "/income");
incomeRequest.send();

//Functionality to update income
let buttonAHandler = function() {
    if (partnerAreadOnly){
        partnerADisplay.removeAttribute("readOnly");
        partnerAreadOnly = false;
        partnerAButton.innerText = "Confirm"
        partnerADisplay.style.backgroundColor = "white"
    } else {
        //functionality to update the income in database
        let data = {newIncome: partnerADisplay.value};
        let updatePartnerAIncomeRequest = new XMLHttpRequest();

        updatePartnerAIncomeRequest.addEventListener("load", function(){
          document.location="/"
        });

        updatePartnerAIncomeRequest.open("POST", '/income/' + partnerAName);
        updatePartnerAIncomeRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        updatePartnerAIncomeRequest.send(JSON.stringify(data));

        //cosmetic
        partnerADisplay.setAttribute("readonly", true);
        partnerAreadOnly = true;
        partnerAButton.innerText = "Update"
        partnerADisplay.style.backgroundColor = "#e9ecef"
    }
}

let buttonBHandler = function() {
    if (partnerBreadOnly){
        partnerBDisplay.removeAttribute("readOnly");
        partnerBreadOnly = false;
        partnerBButton.innerText = "Confirm"
        partnerBDisplay.style.backgroundColor = "white"
    } else {
        //functionality to update the income in database
        let data = {newIncome: partnerBDisplay.value};
        let updatePartnerBIncomeRequest = new XMLHttpRequest();

        updatePartnerBIncomeRequest.addEventListener("load", function(){
          document.location="/"
        });

        updatePartnerBIncomeRequest.open("POST", '/income/' + partnerBName);
        updatePartnerBIncomeRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        updatePartnerBIncomeRequest.send(JSON.stringify(data));

        //cosmetic
        partnerBDisplay.setAttribute("readonly", true);
        partnerBreadOnly = true;
        partnerBButton.innerText = "Update";
        partnerBDisplay.style.backgroundColor = "#e9ecef";
    }
}


partnerAButton.addEventListener('click', buttonAHandler)
partnerBButton.addEventListener('click', buttonBHandler)