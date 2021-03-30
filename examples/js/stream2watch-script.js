var sources_buttons = document.querySelector('.stream-box-sources-list-item');

function get_iframe_link(){
    // click the first source button
    sources_buttons.click();
    
    // after click define iframe main and child with the correct src attribute
    var iframe = document.querySelector('iframe.stream-single-player-iframe.nt');
    var iframe_child = iframe.contentWindow.document.getElementsByTagName("iframe")[0];

    var iframe_src = iframe_child.getAttribute("src");

    return iframe_src;
}