// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function check_sources_buttons(){
    // sources button on front end
    var sources_buttons = document.querySelector('.stream-box-sources-list-item');

    // click the first source button
    sources_buttons.click();
}

function get_iframe_links(){
    // after click define iframe main and child with the correct src attribute
    var iframe = document.querySelector('iframe.stream-single-player-iframe.nt');
    var iframe_child = iframe.contentWindow.document.getElementsByTagName("iframe")[0];

    var iframe_src = iframe_child.getAttribute("src");
    
    return iframe_src;
}