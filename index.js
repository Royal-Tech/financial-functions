'use strict';

function pay(yearRate, loanTerm, loanAmount) {
  if (typeof yearRate !== 'number' ||
    typeof loanTerm !== 'number' ||
    typeof loanAmount !== 'number') {
    return NaN;
  }
  var monthRate = ((yearRate / 12) / 100);
  var fee = loanAmount * monthRate;
  var divider = 1 - Math.pow((1 + monthRate), -loanTerm);
  return fee / divider;
}

module.exports = {
  pay: pay
};
