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

use HeadlessChromium\Page;
use HeadlessChromium\BrowserFactory;

require(__DIR__ . '/../vendor/autoload.php');

// path to the file to store websocket's uri
$socketFile = '/tmp/chrome-php-demo-socket'; 

// use chromium-browser executable
$browserFactory = new BrowserFactory('chromium-browser');

$browser = $browserFactory->createBrowser([
    'connectionDelay' => 0.8,           // add 0.8 second of delay between each instruction sent to chrome,
    //'debugLogger'     => 'php://stdout', // will enable verbose mode
    'headless'  => true,
    'noSandbox' => true
]);

/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "ovoOno!!2021", "ovoono2021");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
} 

try {
    // create a page and navigate to the url
    $page = $browser->createPage();
    $page->navigate('https://allfeeds.live/')->waitForNavigation(Page::DOM_CONTENT_LOADED, 10000);
    
    // include .js file to trigger function
    $page->addScriptTag([
        'content' => file_get_contents('js/allfeeds-scripts.js')
    ])->waitForResponse();
    
    // choose 3 sports basketball, soccer, mma
    $sport = "mma";
    $script = 'click_sport_tab("'.$sport.'")'; 
    $evaluation = $page->evaluate($script)->getReturnValue(); 
    $script = 'get_event_info()'; 
    $value = $page->evaluate($script)->getReturnValue();

    foreach($value as $v)
    {
        if($sport == 'mma')
        {
            // Attempt insert query execution
            $sql = "INSERT INTO events_mma (name, link) VALUES ({$v['name']}, {$v['link']})";
            if(mysqli_query($link, $sql)){
                echo "Records inserted successfully.";
            } else{
                echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
            }

            // Close connection
            mysqli_close($link);
        } elseif($sport == 'basketball')
        {
            // Attempt insert query execution
            $sql = "INSERT INTO events_basketball (name, link) VALUES ({$v['name']}, {$v['link']})";
            if(mysqli_query($link, $sql)){
                echo "Records inserted successfully.";
            } else{
                echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
            }

            // Close connection
            mysqli_close($link);
        }
    }

    var_dump($value);

} finally {
    // cya
    $browser->close();
}

