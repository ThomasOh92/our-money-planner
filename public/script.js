
let netWorthDisplay = document.getElementById("networth");

//Procuring the current net worth
let netWorthResponseHandler = function() {
  let money = parseInt(this.responseText)
  netWorthDisplay.value = "$" + money.toLocaleString('en-US', {minimumFractionDigits: 2});
};
let netWorthRequest = new XMLHttpRequest();
netWorthRequest.addEventListener("load", netWorthResponseHandler);
netWorthRequest.open("GET", "/networth");
netWorthRequest.send();

//Updating the current net worth
let updateNetWorthButton = document.getElementById('updatenetworthbutton')

let updateNetWorthButtonHandler = function(){
    let inputValue = parseFloat(document.getElementById('updateNetWorth').value)
    //Not very robust - will reject "$..", and will screw up any numbers with commas in them
    if (inputValue){
        let data = {inputValue};

        let updateNetWorthRequest = new XMLHttpRequest();

        updateNetWorthRequest.addEventListener("load", function(){
          let money = parseFloat(this.responseText);
          netWorthDisplay.value = "$" + money.toLocaleString('en-US', {minimumFractionDigits: 2});
          document.getElementById('updateNetWorth').value =""
        });

        updateNetWorthRequest.open("POST", '/networth');
        updateNetWorthRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        updateNetWorthRequest.send(JSON.stringify(data));
    } else {
        document.getElementById('updateNetWorth').style.border = "2px solid red"
    }

}
updateNetWorthButton.addEventListener('click', updateNetWorthButtonHandler)