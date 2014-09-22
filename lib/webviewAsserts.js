var Browser = require("zombie");

exports.checkValidWebview = function (address, err, success) {
    console.log('Checking webview for ' + address);
    var browser = new Browser({ debug: true, waitFor: 2000  });
    browser.site = 'https://d2ppvdhjadw815.cloudfront.net';
    browser.visit(address, function (e) {
        if(!!e) {
            console.log(e);
        }

	console.log("Error: " + browser.error);

        var result = browser.query('div.bb-hires-screen');
        if(!!result) {
	    console.log('Thing was found. This thing: ' + result);
            success(result);
        }
    });
};
