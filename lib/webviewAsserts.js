var Browser = require("zombie");

exports.checkValidWebview = function (address, err, success) {
    console.log('Checking webview');
    var browser = new Browser();
    browser.visit(address, function (e, browser) {
        if(!!e) {
            err(e);
        }

        var result = browser.query('div.bb-hires-screen');
        if(!!result) {
            success(result);
        }
    });
};
