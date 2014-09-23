var webdriver = require('selenium-webdriver');

exports.checkValidWebview = function (address, err, success) {
    var driver = new webdriver.Buidler().withCapabilities(webdriver.Capabilities.chrome()).build();
    driver.get(address);
    driver.wait(function () {
        return driver.findElement(webdriver.By.cssSelector('div.bb-hires-screen')).then(function (value) {
            console.log('Found: ', value);
        });
    }, 10000);
};
