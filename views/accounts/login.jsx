var React = require("react");

class LogIn extends React.Component {
  render() {
    return (
      <html>
        <head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link></head>
        <body>
          <div>
            <div className="container"><h1>Log In</h1></div>
            <form method="POST" action="/login" className = "container">
              <div className="form-group">
                <label htmlFor="accountname">Account Name</label>
                <input type="text" className="form-control" id="accountname" name="accountname"></input>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" className="form-control" id="password" name="password"></input>
              </div>
                <button type="submit" value="Submit" className="btn btn-primary">Log In</button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = LogIn;