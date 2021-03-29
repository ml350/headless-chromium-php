<?php

/*
 * This exemple shows how to share a single instance of chrome for multiple scripts.
 *
 * The first time the script is started we use the browser factory in order to start chrome,
 * afterwhat we save the uri to connect to this browser in the file system.
 *
 * Next calls to the script will read the uri from that file in order to connect to the chrome instance instead
 * of creating a new one. If chrome was closed or crashed, a new instance is started again.
 */

use HeadlessChromium\Browser;
use HeadlessChromium\BrowserFactory;

require(__DIR__ . '/../vendor/autoload.php');

// path to the file to store websocket's uri
$socketFile = '/tmp/chrome-php-demo-socket'; 

// use chromium-browser executable
$browserFactory = new BrowserFactory('chromium-browser');

$browser = $browserFactory->createBrowser([
    'connectionDelay' => 0.8,           // add 0.8 second of delay between each instruction sent to chrome,
    'debugLogger'     => 'php://stdout', // will enable verbose mode
    'headless'  => true,
    'noSandbox' => true
]);

try {
    // create a page and navigate to the url
    $page = $browser->createPage();
    $page->navigate('https://stream2watch.one/ufc-streams')->waitForNavigation();

    // get page title 
    $pageTitle = $page->evaluate('document.title')->getReturnValue();
} finally {
    // cya
    $browser->close();
}

