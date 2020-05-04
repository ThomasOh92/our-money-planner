let clientId = "342151651924-frn3q0a6s2u5kp9h6v3tcb016mprseno.apps.googleusercontent.com";

let clientSecret = "3JMMwGLOQ9yKIcyWXJXUDd5T";

let redirect_uri = "https://boiling-beach-26217.herokuapp.com";

let scope = "https://www.googleapis.com/auth/drive";

let url = "https://boiling-beach-26217.herokuapp.com"

let fragmentString = null;
fragmentString = location.hash.substring(1);

if (fragmentString){
    let paramArray = fragmentString.split("&")
    let accessToken = paramArray[1].split("=")[1]
    console.log(accessToken)

    document.getElementById('upload-form').innerHTML =
        `<div class="form-group" >
            <input id="files" type="file" className="form-control-file" name="files[]" multiple/>
            <input type="hidden" name="access_token" value="${accessToken}"/>
            <button type="submit" className="btn btn-outline-secondary" id="upload">Upload</button>
         </div>`
}

/*
 * Create form to request access token from Google's OAuth 2.0 server.
 */
function oauthSignIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {'client_id': clientId,
                'redirect_uri': redirect_uri,
                'response_type': 'token',
                'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
                'include_granted_scopes': 'true',
                'state': 'pass-through value'};

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}

let authorizeButton = document.getElementById('authorize-access')
authorizeButton.addEventListener('click', oauthSignIn);