var webdriver = require('selenium-webdriver');

exports.checkValidWebview = function (address, err, success) {
    console.log('checking valid webview at ' + address);
    var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    driver.get(address).then(function () {
        setTimeout(function () {
            driver.getPageSource().then(function (data) {
                console.log('Page source: ', data);
            });
            driver.wait(function() {
                return driver.findElement(webdriver.By.className('bb-hires-screen')).then(function (value) {
                    console.log('Found: ', value);
                 });
            }, 3000);
        }, 2000);
    });
};
