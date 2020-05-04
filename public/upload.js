let clientId = "342151651924-frn3q0a6s2u5kp9h6v3tcb016mprseno.apps.googleusercontent.com";

let clientSecret = "3JMMwGLOQ9yKIcyWXJXUDd5T";

let redirect_uri = "http://localhost:3000";

let scope = "https://www.googleapis.com/auth/drive";

let url = "http://localhost:3000"

let signIn = (clientId,redirect_uri,scope,url) => {
    url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
        +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
        +"&access_type=offline";

        window.location = url;

}

let authorizeButton = document.getElementById('authorize-access')
authorizeButton.addEventListener('click', () => {signIn(clientId,redirect_uri,scope,url)});
