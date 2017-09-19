import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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
}

const element = <App  />;
ReactDOM.render(
    element,
    document.getElementById('root'));

