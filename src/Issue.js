import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Issue.css';

class Issue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issueNumber: undefined,
      assignedTo: undefined,
      escrow: undefined,
      value: undefined,
      addIssueValue: undefined,
      claimIssueEscrow: undefined,
      isMessageVisible: false,
      message: undefined,
      messageUrl: undefined,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleIssueNumberChange = this.handleIssueNumberChange.bind(this);
    this.handleAddIssueValueChange = this.handleAddIssueValueChange.bind(this);
    this.handleClaimIssueEscrowChange = this.handleClaimIssueEscrowChange.bind(this);
    this.addIssueClicked = this.addIssueClicked.bind(this);
    this.claimIssueClicked = this.claimIssueClicked.bind(this);
    this.closeIssueClicked = this.closeIssueClicked.bind(this);
    this.getIssueDetails = this.getIssueDetails.bind(this);
  }

  handleIssueNumberChange(event) {
    this.setState({
      issueNumber: event.target.value
    }, function() {
      this.getIssueDetails();
    });
  }

  handleAddIssueValueChange(event) {
    this.setState({
      addIssueValue: event.target.value
    });
  }
  
  handleClaimIssueEscrowChange(event) {
    this.setState({
      claimIssueEscrow: event.target.value
    });
  }

  addIssueClicked(event) {
    var issueNumber = this.state.issueNumber;
    window.web3.eth.getAccounts(function(err, accounts) { 
      console.log(issueNumber);
      console.log(accounts[0]);

      window.miniToken.addIssue(issueNumber, { from: accounts[0], value: parseInt(this.state.addIssueValue), gas: 110000, gasPrice: 4000000000 })
        .then(function (txHash) {
          console.log('Transaction sent')
          console.dir(txHash)
          this.setState({ 
            message: 'Submitted transaction.', 
            messageUrl: 'https://etherscan.io/tx/' + txHash, 
            isMessageVisible: true
          });
        }.bind(this))
        .catch(console.error)
    }.bind(this));
  }

  claimIssueClicked(event) {
    var issueNumber = this.state.issueNumber;
    window.web3.eth.getAccounts(function(err, accounts) { 
      console.log(issueNumber);
      console.log(accounts[0]);

      window.miniToken.claimIssue(issueNumber, { from: accounts[0], value: parseInt(this.state.claimIssueEscrow), gas: 110000, gasPrice: 4000000000 })
        .then(function (txHash) {
          console.log('Transaction sent')
          console.dir(txHash)
          this.setState({ 
            message: 'Submitted transaction.', 
            messageUrl: 'https://etherscan.io/tx/' + txHash, 
            isMessageVisible: true
          });
        }.bind(this))
        .catch(console.error)
    }.bind(this));
  }

  closeIssueClicked(event) {
    var reason = event.target.value;
    var issueNumber = this.state.issueNumber;
    window.web3.eth.getAccounts(function(err, accounts) { 
      console.log(issueNumber);
      console.log(accounts[0]);

      window.miniToken.completeIssue(issueNumber, parseInt(reason), { from: accounts[0], gas: 110000, gasPrice: 4000000000 })
        .then(function (txHash) {
          console.log('Transaction sent')
          console.dir(txHash)
          this.setState({ 
            message: 'Submitted transaction.', 
            messageUrl: 'https://etherscan.io/tx/' + txHash, 
            isMessageVisible: true
          });
        }.bind(this))
        .catch(console.error)
    }.bind(this));
  }

  getIssueDetails() {
    if (this.state.issueNumber !== undefined) {
      var result = window.miniToken.getIssue(this.state.issueNumber).then(function (result) {
        if (typeof window.web3 !== 'undefined') {
          this.setState({
            assignedTo: result['assignedTo'],
            escrow: (result['escrow'] || 0).toNumber(),
            value: (result['value'] || 0).toNumber(),
          });
          }
      }.bind(this));
    }
  }

  render() {
    return ( <div>
              <div className='issue-row'>
                Issue Number <input placeholder="Try issue #17" type = "text" name = "issueNumber" value = {this.state.issueNumber} onChange = {this.handleIssueNumberChange.bind(this)} /> 
                <br />
                <span className='issue-description'>
                  This is a work item/issue number for a software project. A positive integer. Try using issue number 17. It's the test issue.
                </span>
              </div> 
              <div className='issue-row'>
                <button onClick={this.addIssueClicked}>Add Issue</button> Value <input placeholder="100000000000000" type = "text" name = "addIssueValue" value = {this.state.addIssueValue} onChange = {this.handleAddIssueValueChange.bind(this)} /> 
                <br />
                <span className='issue-description'>
                  Adds a new issue. When the issue is added, the Value (in wei) is taken from your account and reserved for issue.
                  <br />
                  Note: The value is in wei (10^18 wei == 1 eth). So try using 100000000000000, which is 0.0001 ether.
                </span>
              </div>
              <div className='issue-row'>
                <button onClick={this.claimIssueClicked}>Claim Issue</button> Escrow <input placeholder="2000000" type = "text" name = "claimIssueEscrow" value = {this.state.claimIssueEscrow} onChange = {this.handleClaimIssueEscrowChange.bind(this)} />
                <br />
                <span className='issue-description'>
                  Claims an issue. In order to work on an issue, you need to claim it. When you claim an issue 20% of the value of the issue is taken from your account and reserved for the issue in escrow. If you fix the issue, the value + your escrow is deposited to your account (100% + 20% = 120%). If you do not fix the issue, your escrow is forfeited (-20%).
                  <br />
                  Note: The value must equal the escrow value of the issue. i.e. copy the escrow amount in from the issue details.
                </span>
              </div>
              <div className='issue-row'>
               <button onClick={this.closeIssueClicked} value='0'>Close Fixed</button > <button onClick={this.closeIssueClicked} value='1'>Close Not Fixed</button >
                <br />
                <span className='issue-description'>
                  Close an issue. An issue can either be closed as fixed or not fixed. If the issue is fixed, the value of the issue + the escrow is deposited in the owner's account. If the issue is not fixed, the owner's escrow is forfeited and the issue value remains (so someone else can claim the issue and provide a fix).
                </span>
              </div> 
              <div className='issue-row'>
                Issue Number {this.state.issueNumber} 
                <br />
                Owner {this.state.assignedTo} 
                <br />
                Escrow {this.state.escrow} 
                <br />
                Value {this.state.value} 
              </div>
              <div className='issue-row'>
                <button onClick={this.getIssueDetails}>Refesh</button> 
              </div> 
              { this.state.isMessageVisible &&
                <div className='issue-row-message'>
                  <span>{this.state.message}</span>
                  <br />
                  <a target='_blank' href={this.state.messageUrl}>{this.state.messageUrl}</a>
                </div> 
              }
            </div>
    );
  }
}

export default Issue;