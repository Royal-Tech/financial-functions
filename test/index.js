var expect = require('chai').expect;
var financial = require('../index');

describe('Test Financial Functions', function() {
  describe('Test Pay Function', function () {
    it('Should calculate a fee according to the parameters given', function() {
      var yearRate = 3.5;
      var loanTerm = 360;
      var loanAmount = 1530;
      expect(financial.pay(yearRate, loanTerm, loanAmount))
        .to
        .equal(6.870383723475022);
    });
  });
});
