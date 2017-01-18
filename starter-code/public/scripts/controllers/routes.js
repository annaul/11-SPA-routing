'use strict';

// DONE: Configure routes for this app with page.js, by registering each URL your app can handle,
// linked to a a single controller function to handle it:
page('/', articleView.init);
// page('/admin', adminView.init);
page('/about', aboutController.show);




// DONE: What function do you call to activate page.js? Fire it off now, to execute
page();
