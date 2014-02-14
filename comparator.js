/*
	Require and initialise PhantomCSS module
	Paths are relative to CasperJs directory
*/
var phantomcss = require('./../PhantomCSS/phantomcss.js');

phantomcss.init({
	screenshotRoot: './output-phantomcss',
	failedComparisonsRoot: './failures',
	libraryRoot: './../PhantomCSS/',
	mismatchTolerance: 1.5, // ignore failures below this mismatch % threshold
	addLabelToFailedImage: false
});

casper.start( '' );

casper.viewport(1024, 768);

casper.then( function now_check_the_screenshots(){
	// compare screenshots
	phantomcss.compareAll();
});

casper.then( function end_it(){
	casper.test.done();
});

/*
Casper runs tests
*/
casper.run(function(){
	console.log('\nTHE END.');
	phantom.exit(phantomcss.getExitStatus());
});

