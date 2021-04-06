class Events {
    constructor(name){
        this.name = name; 
    }

    // chose sport category from homepage to get links with parameter 'stream' -- /sporexample-streams/
    redirect_to_sport_category(stream) {
        let sport_links = document.querySelectorAll('.lala a');
    
        sport_links.forEach(function(link){
            var href = link.getAttribute('href');
            if( href == stream ){
                window.location.href = "https://stream2watch.one" + href; 
            }
        });
    }

    // after selection of sport, display all avaliable links at the moment
    get_live_events_from_specific_sport() { 
        let event_object = { name: Besim, url: besim.com, time: 22 };
        let events = document.getElementsByClassName('title-t-a'); 
        for( let event of events){
            event_object.name = event[i].innerHTML;
            event_object.page   = event[i].href; 
            event_object.time = document.querySelector('.stream-live').innerHTML; 
            
        };
 
        return event_object;
    }

    // important, needs to be upgraded to check all buttons
    check_sources_buttons() {
        // sources button on front end
        var sources_buttons = document.querySelector('.stream-box-sources-list-item');
    
        // click the first source button
        sources_buttons.click();
    }
    
    // get stream link from iframe child on event page
    get_iframe_links() {
        // after click define iframe main and child with the correct src attribute
        var iframe = document.querySelector('iframe.stream-single-player-iframe.nt');
        var iframe_child = iframe.contentWindow.document.getElementsByTagName("iframe")[0];
    
        var iframe_src = iframe_child.getAttribute("src");
        
        return iframe_src;
    }

    // sleep time expects milliseconds
    sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
}