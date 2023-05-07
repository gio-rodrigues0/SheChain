const contrato = artifacts.require("CarbonCreditTrading");

module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(contrato);
  };