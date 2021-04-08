function get_event_info(sport){
    var tab_nav = document.querySelector('h2');
    var tab_children = tab_nav.children;
    var tab_events = document.querySelectorAll('#tab-container .event');

    // Basketball streams
    var tab_basketball = tab_children[0];

    // MMA/UFC/WWE streams
    var tab_mma = tab_children[3];

    // Soccer streams 
    var tab_soccer = tab_children[5];

    setTimeout(function(){
        if (sport === 'basketball'){
            tab_basketball.click();
        } else if (sport === 'mma') {
            tab_mma.click();
        } else {
            tab_soccer.click();
        }
    }, 2500);

    var events = [];

    var i;
    for (i = 0; i < tab_events.length; i++) {
        var events_obj = {};

        var event_title = tab_events[i].querySelector('h4').innerText;
        var event_title_cut = event_title.substr(9);
        var event_link_input = tab_events[i].querySelector('input.sm').getAttribute("value");

        events_obj['name'] = event_title_cut;
        events_obj['link'] = event_link_input;
        events.push(events_obj); 
    } 

    return events;
}