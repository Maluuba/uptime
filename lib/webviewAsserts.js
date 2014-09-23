var phantom = require("phantom");

exports.checkValidWebview = function (address, err, success) {
    console.log('Checking webview for ' + address);
    browser.site = 'https://d2ppvdhjadw815.cloudfront.net/';

    phantom.create(function (ph) {
	ph.createPage(function (page) {
            page.open('address', function (status) {
                console.log('opened ' + address + '? ', status);
                page.evaluate(function () { return document.querySelectorAll('div.bb-hires-screen'); }, function (result) {
                    console.log('Result: ' + result);
                    ph.exit();
                });
            });
	});
    });
};
