let concertButton = document.getElementById("concertButton");

concertButton.addEventListener("click", function(){
    event.preventDefault()
    getConcerts(getValue())});

function getConcerts(concertGenre) {

    // let concertApiKey = apikey=tE9GuWo4wLuJFK8wwpUFIHPujVrriL7E

    fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${concertKey}&city=Nashville&countryCode=US&keyword=${concertGenre}&sort=date,asc`)
    .then(result => result.json())
    .then(parsedJSON => {
          parsedJSON._embedded.events.forEach(event => {
        //   console.log(event)


          let eventNameHtml = `<h1>Name: ${event.name}</h1>
          <h4>Location: ${event._embedded.venues[0].name}</h4>
          <p>Date: ${event.dates.start.localDate}</p>
          <p>Time: ${event.dates.start.localTime}</p>`
           eventContainer.innerHTML += eventNameHtml
        });
    })
}
const eventContainer = document.querySelector("#entryContainer")
// console.log(eventContainer)

function getValue(){
    let userInput = document.getElementById("userInputBox").value
    eventContainer.innerHTML = ""
    return userInput
}