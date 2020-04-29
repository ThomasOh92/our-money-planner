var React = require("react");

class CreateUsers extends React.Component {
  render() {
    return (
      <html>
        <head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link></head>
        <body>
          <div>
            <div className="container"><h1>Create Users</h1></div>
            <form method="POST" action="/registration/users" className = "container">
              <div className="form-group">
                <label htmlFor="partnera">Partner A</label>
                <input type="text" className="form-control" id="partnera" name="partnera"></input>
              </div>
              <div className="form-group">
                <label htmlFor="partnerb">Partner B</label>
                <input type="text" className="form-control" id="partnerb" name="partnerb"></input>
              </div>
                <button type="submit" value="Submit" className="btn btn-primary">Create Users</button>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = CreateUsers;