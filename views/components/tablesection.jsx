var React = require('react');

class TableSection extends React.Component {
  render() {
    let dataTarget = "#" + this.props.info.modalId

    return (
        <div>
            <label className="font-weight-bold">{this.props.info.title}</label>
            {/* Table */}
            <table className="table">
              <thead className="thead-light">
                {this.props.info.columns}
              </thead>
              <tbody id={this.props.info.tableBodyId}>
              </tbody>
            </table>
            {/* Modal to add stuff */}
            <button type="button" className="btn btn-outline-secondary" data-toggle="modal" data-target={dataTarget}>
              {this.props.info.modalButton}
            </button>
            <div className="modal fade" id={this.props.info.modalId} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">{this.props.info.modalAddItem}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form method="POST" action={this.props.info.postRoute}>
                      {this.props.info.modalBody}
                      {this.props.info.modalFooter}
                  </form>
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-outline-danger ml-2" id={this.props.info.deleteButton.id}>{this.props.info.deleteButton.text}</button>
        </div>
    );
  }
}

module.exports = TableSection;