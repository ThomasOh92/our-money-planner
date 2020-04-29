let partnerAButton = document.getElementById('partner-a-button')
let partnerBButton = document.getElementById('partner-b-button')
let partnerADisplay = document.getElementById('partner-a-income')
let partnerBDisplay = document.getElementById('partner-b-income')
let partnerAreadOnly = true;
let partnerBreadOnly = true


let buttonAHandler = function() {
    if (partnerAreadOnly){
        partnerADisplay.removeAttribute("readOnly");
        partnerAreadOnly = false;
        partnerAButton.innerText = "Confirm"
        partnerADisplay.style.backgroundColor = "white"
    } else {
        //functionality to update the income in database
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
        partnerBDisplay.setAttribute("readonly", true);
        partnerBreadOnly = true;
        partnerBButton.innerText = "Update";
        partnerBDisplay.style.backgroundColor = "#e9ecef";
    }
}


partnerAButton.addEventListener('click', buttonAHandler)
partnerBButton.addEventListener('click', buttonBHandler)