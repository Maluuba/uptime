var Browser = require("zombie");

exports.checkValidWebview = function (address, err, success) {
    console.log('Checking webview for ' + address);
    var browser = new Browser({ debug: true, waitFor: 12000  });
    browser.site = 'https://d2ppvdhjadw815.cloudfront.net/';
    browser.visit(address, function (e) {
        if(!!e) {
            console.log(e);
        }

	console.log('Errors: ' + browser.errors);

	browser.wait(2000);
	console.log(browser.html());
        var result = browser.query('div.bb-hires-screen');
        if(!!result) {
	    console.log('Thing was found. This thing: ' + result);
            success(result);
        } else {
	    err(result);
	}
    });
};
