const {google} = require('googleapis');
const url = require('url');
var multer  = require('multer')

module.exports = () => {

  let uploadFile = (req, res) => {
    let file =  req.file
    console.log(req.file)
    console.log(req.body)
    let accesstoken =  req.body.access_token
    console.log(accesstoken)
    //AJAX for uploading google drive file
    // let uploadRequest = new XMLHttpRequest();

    // uploadRequest.addEventListener("load", function(){
    //   res.redirect('/')
    // });

    // uploadRequest.open("POST", '/https://www.googleapis.com/upload/drive/v3/files');
    // uploadRequest.setRequestHeader("Content-Type", "multipart/related; boundary=foo_bar_baz");
    // uploadRequest.send(JSON.stringify(data))


  }



  return {
    uploadFile
  };

}