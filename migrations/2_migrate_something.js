const Initializable = artifacts.require("Initializable");

module.exports = function(deployer) {
  deployer.deploy(Initializable);
};

