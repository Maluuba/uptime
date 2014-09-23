var webdriver = require('selenium-webdriver');

exports.checkValidWebview = function (address, err, success) {
    console.log('checking valid webview at ' + address);
    var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    driver.get(address).then(function () {
        setTimeout(function () {
            var div = driver.findElement(webdriver.By.className('bb-hires-screen'));
            success(div);
        }, 2000);
    });
};
