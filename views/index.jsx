var React = require("react");

class Home extends React.Component {
  render() {
    const partnerAName = this.props.partnerA;
    const partnerBName = this.props.partnerB;
    const currentPartner = this.props.currentPartner;

    return (
      <html>
        <head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link></head>

        <body>
            {/*The topline navigation bar*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">Finance Collab</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              {/*Nav Bar items*/}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/*Display for current user*/}
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Current User: {currentPartner}</a>
                        </li>
                        {/*Change user*/}
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Change User
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" id="partner-a-select">{partnerAName}</a>
                          <a className="dropdown-item" id="partner-b-select">{partnerBName}</a>
                        </div>
                      </li>
                    </ul>
                    {/*Logout button*/}
                    <button class="btn btn-outline-primary my-2 my-sm-0" id="log-out">Log Out</button>
              </div>
            </nav>
            {/* The entire main section*/}
            <div className="container-fluid">
              <div className="row">
              {/* The side navigation bar, to change boards */}
              <div className="col-sm-2">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Financial Overview</a>
                  <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Sticky Notes</a>
                  <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Retrieve Info</a>
                  <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Suggested Financial Products</a>
                </div>
              </div>
              <div className="col-sm-10">
                {/* Financial Overview */}
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    {/* Est. Net Worth Section */}
                    <div id="networth-section" className="d-inline-flex">
                        <form className="form-inline">
                              {/* Current Net Worth */}
                              <div className="form-group mb-2">
                                <label htmlFor="currentNetWorth" className="font-weight-bold">Est. Net Worth: </label>
                                <input type="text" readOnly className="form-control-plaintext w-50 mx-auto text-center" id="networth" />
                              </div>
                              {/* Form to update net worth */}
                              <div className="form-group mb-2">
                                <label htmlFor="updateNetWorth" className="sr-only"></label>
                                <input type="text" className="form-control" id="updateNetWorth" placeholder="$" />
                              </div>
                        </form>
                        <button id="updatenetworthbutton"className="btn btn-primary mb-2">Update</button>
                    </div>
                    {/* Current Income Section */}
                    <div id="income-section">
                      <div class="form-group">
                        <label className="font-weight-bold">Current Income</label>
                            <div class="form-group row">
                                <label for="Partner A" class="col-sm-2 col-form-label">{partnerAName}</label>
                                <div class="col-sm-7 align-self-center input-group">
                                  <input style={{backgroundColor: "#e9ecef"}} class="form-control" type="text" id="partner-a-income" readOnly />
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="partner-a-button">Update</button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="Partner B" class="col-sm-2 col-form-label">{partnerBName}</label>
                                <div class="col-sm-7 align-self-center input-group">
                                  <input style={{backgroundColor: "#e9ecef"}} class="form-control" type="text" id="partner-b-income" readOnly />
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" id="partner-b-button">Update</button>
                                    </div>
                                </div>
                            </div>
                      </div>
                    </div>
                </div>
                {/* Sticky Notes */}
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                {/* Retrieve Info */}
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                {/* Suggested Financial Products */}
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                </div>
              </div>
              </div>
            </div>
        </body>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
    <script src="/networth.js"></script>
    <script src="/income.js"></script>
    <script>
        let partnerAName = `{partnerAName}`;
        let partnerBName = `{partnerBName}`;
    </script>
    <script src="/account.js"></script>
      </html>
    );
  }
}

module.exports = Home;