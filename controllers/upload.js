const {google} = require('googleapis');
const fs = require('fs');
const readline = require('readline');


module.exports = () => {

  let uploadFile = (req, result, next) => {
    let accessToken = req.cookies.accesstoken
    let tokenExpiry = req.cookies.tokenExpiry
    let scopeAccess = req.cookies.scope
    let file = req.file;

    let tokens = {
        access_token: accessToken,
        scope: scopeAccess,
        token_type: "Bearer",
        expiry_date: tokenExpiry
    }

    const oauth2Client = new google.auth.OAuth2(
      "342151651924-frn3q0a6s2u5kp9h6v3tcb016mprseno.apps.googleusercontent.com",
      "3JMMwGLOQ9yKIcyWXJXUDd5T",
      "http://boiling-beach-26217.herokuapp.com"
    );

    oauth2Client.setCredentials(tokens)


    function doUpload() {
        const drive = google.drive({ version: 'v3', auth: oauth2Client });
        var fileMetadata = {
            'name': file.fieldname
        };
        var media = {
            mimeType: file.mimetype,
            body: fs.createReadStream(file.path)
        };
        drive.files.create({
            resource: fileMetadata,
            media: media,
            fields: 'id'
        }, function (err, res) {
            if (err) {
                // Handle error
                console.log(err);
            } else {
                console.log('File Id: ', res.data.id);
                result.redirect('/')
            }
        });
    }

    doUpload()



    //AJAX for uploading google drive file
    // let uploadRequest = new XMLHttpRequest();

    // uploadRequest.addEventListener("load", function(){
    //   console.log("yay!")
    //   res.redirect('/')
    // });

    // uploadRequest.open("POST", '/https://www.googleapis.com/upload/drive/v3/files');
    // uploadRequest.setRequestHeader("Authorization", "Bearer " + accessToken);
    // uploadRequest.setRequestHeader("Content-Type", "multipart/related; boundary=foo_bar_baz");
    // uploadRequest.setRequestHeader("Content-Length", file.size);

    // let data =
    // `
    //     --foo_bar_baz--
    //     Content-Type: application/json; charset=UTF-8
    //     {
    //     file: ${file.fieldname},
    //     file: ${file.encoding}
    //     }
    //     --foo_bar_baz--
    //     Content-Type: ${file.mimetype}

    //     ${file}
    //     --foo_bar_baz--
    // `


    // uploadRequest.send(JSON.stringify(data))



    // let file =  req.file
    // console.log(req.file)
    // console.log(req.body)
    // let accesstoken =  req.body.access_token
    // console.log(accesstoken)


  }



  return {
    uploadFile
  };

}