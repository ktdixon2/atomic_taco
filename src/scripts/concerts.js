
let concertButton = document.getElementById("concertButton");

concertButton.addEventListener("click", function(){ console.log("Hello world"); });

function getConcerts(concertGenre) {

    // let concertApiKey = apikey=tE9GuWo4wLuJFK8wwpUFIHPujVrriL7E

    fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${concertKey}&city=Nashville&countryCode=US&keyword=${concertGenre}&sort=date,asc`)
    .then(result => result.json())
    .then(parsedJSON => {
          parsedJSON._embedded.events.forEach(event => {
          console.log(event.name)

let eventNameHtml = `<h1>${event.name}</h1>`
eventContainer.innerHTML += eventNameHtml

        });
    })
}
const eventContainer = document.querySelector("#entryContainer")
console.log(eventContainer)

getConcerts("country")
