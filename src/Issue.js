import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';

class Issue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issueNumber: null
    };

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      issueNumber: event.target.value
    });

    this.update(event.target.value);
  }

  render() {
    return ( <div>
              <div>
                Issue Number <input placeholder="Try issue #17" type = "text" name = "issueNumber" value = {this.state.issueNumber} onChange = {this.handleChange.bind(this)} /> 
              </div> 
              <div>
                <button>Claim Issue</button> <button>Close Issue</button >
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

  update(issueNumber) {
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