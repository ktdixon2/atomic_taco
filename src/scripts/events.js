const el = document.querySelector(".container");
// console.log("el", el);

function getEventData() {
//     el.innerHTML = "";

const eventBox = document.getElementById("eventDrop");

    fetch("https://www.eventbriteapi.com/v3/events/search/?location.address=nashville", {
        headers: {
            "Authorization": `Bearer ${eventKey}`
        }})
        .then(response => response.json())
        .then(events => {
            console.log("events", events.events);
            const allEvents = events.events
            allEvents.forEach(event => {
                const eventsAsHTML = eventFactory(event);
                // addEventToDom(eventsAsHTML);
                var drop = document.createElement("option");
                drop.text = event.name.text;
                drop.value = event.id;
                eventBox.add (drop); 
                
            })
        })
    console.log("getEventData", getEventData);

}
console.log();

getEventData();

function eventFactory(event) {
    return `
    <h1>${event.name.text}</h1>
    <ul><li>
    ${event.description.text}<br>
    <p>Start Date & Time<br>${event.start.local}</p>
    <p>End Date & Time<br>${event.end.local}</p></li></ul>`
}

function eventSelected (){
    var taco = document.getElementById("eventDrop").value;

    
    // fetch(`https://www.eventbriteapi.com/v3/events/${taco}`, {
    //     headers: {
    //         "content-type": "application/jsonp",
    //         "Authorization": `Bearer ${eventKey}`
    //     }})
    //     .then(response => response.json())
    //     .then(event => {
    //         console.log("event", event);
    //     })
    


}

// addEventToDom = (test) => {
//     el.innerHTML += test;
// }

