var Browser = require("zombie");
var assert = require("assert");

module.exports.checkValidWebview = function (address, err, success) {
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
