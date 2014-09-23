var webdriver = require('selenium-webdriver');

exports.checkValidWebview = function (address, err, success) {
    console.log('checking valid webview at ' + address);
    var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
    
    
    webdriver.promise.controlFlow().on('uncaughtException', function (e) {
        console.error('Unhandled exception: ' + e);
	driver.close();
        err(e);
    });
    
    driver.get(address).then(function () {
        setTimeout(function () {
            var div = driver.findElement(webdriver.By.className('bb-hires-screen'));
//            var div = driver.findElement(webdriver.By.className('funky-chunky-monkey')); //TODO Rremove; Will NOT be found.
	    driver.close();
            success();
        }, 2000);
    });
};
