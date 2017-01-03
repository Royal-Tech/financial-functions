'use strict';

function pay(yearRate, loanTerm, loanAmout) {
  var monthRate = ((yearRate / 12) / 100);
  var fee = loanAmout * monthRate;
  var divider = 1 - Math.pow((1 + monthRate), -loanTerm);
  return fee / divider;
}

module.exports = {
  pay: pay
};
