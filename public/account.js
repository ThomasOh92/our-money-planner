let partnerASelect = document.getElementById('partner-a-select')
let partnerBSelect = document.getElementById('partner-b-select')
let logOut = document.getElementById('log-out')

let partnerASelectHandler = function(){
    document.cookie=`currentpartner=${partnerAName}`;
    document.location="/"
}

let partnerBSelectHandler = function(){
    document.cookie=`currentpartner=${partnerBName}`;
    document.location="/"
}

let logOutHandler = function(){
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    document.location="/"
}

partnerASelect.addEventListener('click', partnerASelectHandler)
partnerBSelect.addEventListener('click', partnerBSelectHandler)
logOut.addEventListener('click', logOutHandler)