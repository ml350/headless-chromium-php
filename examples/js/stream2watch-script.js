// sport array for ovoono
var sport_streams_oo = ["boxing-streams", "ufc-streams", "nba-streams", "soccer-streams"]; 

// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

// chose sport category from homepage to get links with parameter 'stream' -- /sporexample-streams/
function choose_sport_from_home(stream){
    let sport_links = document.querySelectorAll('.lala a');

    sport_links.forEach(function(link){
        var href = link.getAttribute('href');
        if( href == stream ){
            var sport_link = href;
            return sport_link;
        }
    });
}

function get_avaliable_events_from_specific_sport(){
    let events_data;

    let events = document.querySelectorAll('.title-t-a');
    events.forEach(function(e){
        let event_title = e.innerHTML;
        let event_href  = e.href;
        let event_array = [event_title, event_href];
    
        return event_array;
    });
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