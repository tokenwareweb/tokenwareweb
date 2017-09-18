import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';

class Issue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issueNumber: null,
      assignedTo: null,
      escrow: null,
      value: null,
      claimIssueEscrow: null,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleIssueNumberChange = this.handleIssueNumberChange.bind(this);
    this.getIssueDetails = this.getIssueDetails.bind(this);
  }

  handleIssueNumberChange(event) {
    this.setState({
      issueNumber: event.target.value
    });

    this.getIssueDetails(event.target.value);
  }

  handleAddIssueValueChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  
  handleClaimIssueEscrowChange(event) {
    this.setState({
      escrow: event.target.value
    });
  }

  render() {
    return ( <div>
              <div>
                Issue Number <input placeholder="Try issue #17" type = "text" name = "issueNumber" value = {this.state.issueNumber} onChange = {this.handleIssueNumberChange.bind(this)} /> 
              </div> 
              <div>
                <button>Add Issue</button> Value <input placeholder="10000000" type = "text" name = "addIssueValue" value = {this.state.addIssueValue} onChange = {this.handleAddIssueValueChange.bind(this)} /> 
              </div>
              <div>
                <button>Claim Issue</button> Escrow <input placeholder="2000000" type = "text" name = "claimIssueEscrow" value = {this.state.claimIssueEscrow} onChange = {this.handleClaimIssueEscrowChange.bind(this)} />
              </div>
              <div>
                <button>Close Issue</button >
              </div> 
              <div>
                Issue Number {this.props.issueNumber} 
                <br />
                Owner {this.props.assignedTo} 
                <br />
                Escrow {this.props.escrow} 
                <br />
                Value {this.props.value} 
              </div> 
            </div>
    );
  }

  getIssueDetails(issueNumber) {
    if (issueNumber !== undefined) {
      window.miniToken.getIssue(issueNumber).then(function (result) {
        if (typeof window.web3 !== 'undefined') {
          const element = <Issue assignedTo = {
            result['assignedTo']
          }
          escrow = {
            (result['escrow'] || 0).toNumber()
          }
          value = {
            (result['value'] || 0).toNumber()
          }
          />
          ReactDOM.render(
            element,
            document.getElementById('root')
          );
        }
      });
    }
  }

  addIssue(issueNumber, value) {
    if (issueNumber !== undefined) {
      window.miniToken.getIssue(issueNumber).then(function (result) {
        if (typeof window.web3 !== 'undefined') {
          const element = <Issue assignedTo = {
            result['assignedTo']
          }
          escrow = {
            (result['escrow'] || 0).toNumber()
          }
          value = {
            (result['value'] || 0).toNumber()
          }
          />
          ReactDOM.render(
            element,
            document.getElementById('root')
          );
        }
      });
    }
  }
}

export default Issue;