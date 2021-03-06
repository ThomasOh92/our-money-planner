var React = require("react");
var TableSection = require('./components/tablesection');

class Home extends React.Component {
  render() {
    const partnerAName = this.props.partnerA;
    const partnerBName = this.props.partnerB;
    const currentPartner = this.props.currentPartner;
    const bankAccountInfoObject = {
        title: "Bank Accounts",
        columns: <tr>
                  <th scope="col">Bank</th>
                  <th scope="col">Account No. / Description</th>
                  <th scope="col">Balance</th>
                </tr>,
        tableBodyId: "bank-acc-table",
        modalButton: "Add",
        modalId: "bank-acc-modal",
        modalAddItem: "New Bank Account",
        postRoute: "/bankaccount",
        modalBody: <div className="modal-body">
                      <div className="form-group">
                        <label htmlFor="bank" className="col-form-label">Bank:</label>
                        <input type="text" className="form-control" id="bank" name="bank" value="DBS"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="accountdescription" className="col-form-label">Account No. / Description:</label>
                        <textarea className="form-control" id="accountdescription" name="accountdescription" value="Savings Acc - XXX-XXXXX-X"></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="balance" className="col-form-label">Balance: (numbers only)</label>
                        <input type="text" className="form-control" id="balance" name="balance" value="100000.00"/>
                      </div>
                  </div>,
        modalFooter:  <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" id="add-bank-account" className="btn btn-primary">Add Account</button>
                      </div>,
        deleteButton: {
            id: "reveal-delete-buttons-bankacc",
            text: "Delete"
        }
    };
    const investmentInfoObject = {
        title: "Investments",
        columns: <tr>
                  <th scope="col">Investment</th>
                  <th scope="col">Description / Comments</th>
                  <th scope="col">Est. Value</th>
                </tr>,
        tableBodyId: "investment-table",
        modalButton: "Add",
        modalId: "investment-modal",
        modalAddItem: "New Investment",
        postRoute: "/investment",
        modalBody: <div className="modal-body">
                      <div className="form-group">
                        <label htmlFor="name" className="col-form-label">Investment:</label>
                        <input type="text" className="form-control" id="investmentname" name="name" defaultValue="Tesla Shares"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="description" className="col-form-label"> Description / Comments:</label>
                        <textarea className="form-control" id="investmentdescription" name="description" defaultValue="50k shares, dividend not bad"></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="value" className="col-form-label">Est. Value:</label>
                        <input type="text" className="form-control" id="value" name="value" defaultValue="100000.00"/>
                      </div>
                  </div>,
        modalFooter:  <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" id="add-investment" className="btn btn-primary">Add Investment</button>
                      </div>,
        deleteButton: {
            id: "reveal-delete-buttons-investment",
            text: "Delete"
        }
    };
    const outgoingInfoObject = {
        title: "Debts, Bills, etc.",
        columns: <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Description / Comments</th>
                  <th scope="col">Payments</th>
                </tr>,
        tableBodyId: "outgoing-table",
        modalButton: "Add",
        modalId: "outgoing-modal",
        modalAddItem: "New Debt, Bill, etc.",
        postRoute: "/outgoing",
        modalBody: <div className="modal-body">
                      <div className="form-group">
                        <label htmlFor="name" className="col-form-label">Name:</label>
                        <input type="text" className="form-control" id="outgoingname" name="name" defaultValue="Mortgage for House"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="description" className="col-form-label"> Description / Comments:</label>
                        <textarea className="form-control" id="outgoingdescription" name="description" defaultValue="Dam shag, 2m left"></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="payment" className="col-form-label">Payments:</label>
                        <input type="text" className="form-control" id="payment" name="payment" defaultValue="10k / month"/>
                      </div>
                  </div>,
        modalFooter:  <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" id="add-outgoing" className="btn btn-primary">Add Item</button>
                      </div>,
        deleteButton: {
            id: "reveal-delete-buttons-outgoing",
            text: "Delete"
        }
    };
    const otherInfoObject = {
        title: "Others",
        columns: <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Comments</th>
                </tr>,
        tableBodyId: "other-table",
        modalButton: "Add",
        modalId: "other-modal",
        modalAddItem: "New Item",
        postRoute: "/other",
        modalBody: <div className="modal-body">
                      <div className="form-group">
                        <label htmlFor="title" className="col-form-label">Title:</label>
                        <input type="text" className="form-control" id="title" name="title" defaultValue="Insurance Plan"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="comments" className="col-form-label"> Comments:</label>
                        <textarea className="form-control" id="comments" name="comments" defaultValue="Quite Good Coverage, 2m upon death"></textarea>
                      </div>
                  </div>,
        modalFooter:  <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" id="add-other" className="btn btn-primary">Add Item</button>
                      </div>,
        deleteButton: {
            id: "reveal-delete-buttons-other",
            text: "Delete"
        }
    };
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
            <link href='https://fonts.googleapis.com/css?family=Gloria+Hallelujah' rel='stylesheet' type='text/css'></link>
            <link rel="stylesheet" type="text/css" href="/style.css"></link>
        </head>
        <body>
            {/*The topline navigation bar*/}
            <nav className="navbar navbar-expand-lg navbar-light sticky-top my-navbar" style={{height: "100px"}}>
              {/*Logo Stuff*/}
              <a className="navbar-brand" href="/">
                <div class="row justify-content-center">
                    <div className="col-sm-6 col-md-4 d-inline-flex logo-container">
                   <img className="logo" src="/img/logo.png" alt="logo"/>
                   <h5 className="logo-text ml-3">Our Money Planner</h5>
                    </div>
                </div>
              </a>

              {/*Nav Bar items*/}
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-5">
                        {/*Display for current user*/}
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Current User: {currentPartner}</a>
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
                    <button className="btn btn-outline-primary my-2 my-sm-0" id="log-out">Log Out</button>
              </div>
            </nav>
            {/* The entire main section*/}
            <div className="container-fluid">
              <div className="row">
              {/* The side navigation bar, to change boards */}
              <div className="col-sm-2">
                 <div className="nav flex-sm-column nav-pills mt-4 greypills my-sidebar" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Financial Overview</a>
                      <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Sticky Notes</a>
                      <a className="nav-link" id="v-pills-s-tab" data-toggle="pill" href="#v-pills-s" role="tab" aria-controls="v-pills-s" aria-selected="false">Upload Documents</a>
                      <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Suggested Financial Products</a>
                </div>
              </div>
              <div className="col-sm-10" id="board-section">
                {/* Financial Overview */}
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    {/* Est. Net Worth Section */}
                    <div id="networth-section" className="d-inline-flex align-items-center">
                        <form className="form-inline">
                              {/* Current Net Worth */}
                              <div className="form-group mb-2 mt-4">
                                <label htmlFor="currentNetWorth" className="font-weight-bold">Est. Net Worth: </label>
                                <input type="text" readOnly className="form-control-plaintext w-50 mx-auto text-center" id="networth" />
                              </div>
                              {/* Form to update net worth */}
                              <div className="form-group mb-2 mt-4">
                                <label htmlFor="updateNetWorth" className="sr-only"></label>
                                <input type="text" className="form-control" id="updateNetWorth" placeholder="$" />
                              </div>
                        </form>
                        <button id="updatenetworthbutton" className="btn btn-primary mb-2 mt-4">Update</button>
                    </div>
                    <br />
                    <br />
                    {/* Current Income Section */}
                    <div id="income-section">
                      <div className="form-group">
                        <label className="font-weight-bold">Current Income</label>
                            <div className="form-group row">
                                <label htmlFor="Partner A" className="col-sm-2 col-form-label">{partnerAName}</label>
                                <div className="col-sm-7 align-self-center input-group">
                                  <input style={{backgroundColor: "#e9ecef"}} className="form-control" type="text" id="partner-a-income" readOnly />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button" id="partner-a-button">Update</button>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="Partner B" className="col-sm-2 col-form-label">{partnerBName}</label>
                                <div className="col-sm-7 align-self-center input-group">
                                  <input style={{backgroundColor: "#e9ecef"}} className="form-control" type="text" id="partner-b-income" readOnly />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button" id="partner-b-button">Update</button>
                                    </div>
                                </div>
                            </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    {/* Bank Account and Debts/Bills Section */}
                    <div className = "container-fluid pl-0">
                        <div className="row">
                            {/*Bank Accounts Section*/}
                            <div className="col-sm-6">
                                <TableSection info={bankAccountInfoObject}/>
                            </div>
                            {/*Investments Section*/}
                            <div className="col-sm-6">
                                <TableSection info={investmentInfoObject}/>
                            </div>
                        </div>
                        <div className="row mt-5">
                            {/*Outgoings Section*/}
                            <div className = "col-sm-6">
                                <TableSection info={outgoingInfoObject}/>
                            </div>
                            {/*Others Section*/}
                            <div className = "col-sm-6">
                                <TableSection info={otherInfoObject}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sticky Notes */}
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                  <div id="board">
                  </div>
                    <button type="button" className="btn btn-outline-secondary" id="add-new-note">Add New Note</button>
                    <button type="button" className="btn btn-outline-secondary" id="save-button">Save</button>
                </div>
                {/* Retrieve Info */}
                <div className="tab-pane fade" id="v-pills-s" role="tabpanel" aria-labelledby="v-pills-s-tab">
                    <form method="POST" action="/upload" enctype="multipart/form-data" id="upload-form">
                    </form>
                        <button type="button" className="btn btn-outline-secondary" id="authorize-access">Authorize</button>
                </div>
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
    <script src="/bankaccount.js"></script>
    <script src="/investments.js"></script>
    <script src="/outgoings.js"></script>
    <script src="/others.js"></script>
    <script src="/notes.js"></script>
    <script src="/upload.js"></script>
     </html>
    );
  }
}

module.exports = Home;