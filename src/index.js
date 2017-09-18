import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Issue from './Issue';
import registerServiceWorker from './registerServiceWorker';
import Contract from './contract.js';
const Eth = require('ethjs-query')
const EthContract = require('ethjs-contract')
const Web3 = require('web3');

registerServiceWorker();

window.addEventListener('load', function () {
    if (typeof window.web3 !== 'undefined') {
        window.web3 = new Web3(window.web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    startApp()
})

function startApp() {
    const eth = new Eth(window.web3.currentProvider)
    const contract = new EthContract(eth)

    console.log(window.web3);

    initContract(contract)
}

function initContract(contract) {
    const MiniToken = contract(Contract.abi)
    window.miniToken = MiniToken.at(Contract.address)
    //   listenForClicks(miniToken)
}

function tick() {
    window.miniToken.getIssue(17).then(function (result) {
        if (typeof window.web3 !== 'undefined') {
        const element = <Issue assignedTo={result['assignedTo']}
                               escrow={result['escrow'].toNumber()}
                               value={result['value'].toNumber()} />
        ReactDOM.render(
            element,
            document.getElementById('root')
        );
        }
    });
}

const element = <Issue  />;
ReactDOM.render(
    element,
    document.getElementById('root'));
// setInterval(tick, 1000);
