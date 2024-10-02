// top level middleware for JSD contracts

import * as contract from './contract.js';

function contractNamespaceObject() {
  // iterate over all properties of the contract object
  // ESM modules are not enumerable, use getOwnPropertyNames
  const exports = {};

  for (const key of Object.getOwnPropertyNames(contract)) {
    if (key === 'default') {
      continue;
    }

    exports[key] = contract[key];
  }

  return exports;
}

function callClassContract(state, functionName, body) {
  const instance = new contract.default(state, {msg: {sender: state.sender}, address: state.self});

  return instance[functionName](body);
}

export default function(state, functionName, body) {
  if (typeof functionName !== 'string') {
    return new Error('contract function name must be a string, got ' + typeof functionName);
  }

  // module 'contract' exports contract as a class via the default export
  // TODO: check if contract is a class or just a function
  if (contract.default && typeof contract.default === 'function') {
    return callClassContract(state, functionName, body);
  }

  const entry = contractNamespaceObject()[functionName];

  if (typeof entry === 'undefined') {
    return new Error('contract function ' + functionName + ' not found: got undefined');
  }

  if (typeof entry !== 'function' && !body) {
    return entry;
  }

  if (typeof entry === 'function') {
    return entry(state, body);
  }

  return new Error('contract function' + functionName + ' not found: got ' + typeof entry);
}