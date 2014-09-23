var webdriver = require('selenium-webdriver');
var SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;

var server = new SeleniumServer('./selenium-server-standalone-2.43.1.jar', {
  port: 4445
});
server.start();

webdriver.promise.controlFlow().on('uncaughtException', function (e) {
    console.error('Unhandled exception: ' + e + ' address');
});

exports.checkValidWebview = function (address, err, success) {
    console.log('checking valid webview at ' + address);
    var driver = new webdriver.Builder()
      .usingServer(server.address())
      .withCapabilities(webdriver.Capabilities.firefox())
      .build();
    
    driver.get(address).then(function () {
        setTimeout(function () {
            var div = driver.findElement(webdriver.By.className('bb-hires-screen'));
	    driver.close();
            success();
        }, 2000);
    });
};
