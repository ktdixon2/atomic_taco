// foodKey = "009575da97a7b2eff9ebe08ad48a9d40"
// addResToDom = (resAsHTML) => {
//     const el = document.querySelector("#container");
//     el.innerHTML += resAsHTML;
// }

// resFactory = (resy) => {
//     return `<h2>${resy.cuisines}</h2>`
// }
 
// fetch("https://developers.zomato.com/api/v2.1/cuisines?city_id=1138"), {
//     headers: {
//         "Accept": "application/json",
//         "user-key": "09575da97a7b2eff9ebe08ad48a9d40"
//     }

// .then(r => r.json())
// .then(results =>{
//     console.table(results, "cuisines")
//     // restaurants.cuisines = results.restaurant.cuisines;
//     // const resAsHTML = resFactory(restaurants)
//     // addResToDom(resAsHTML)
// })}

// console.log("hello");

// const el = document.querySelector(".container");


// function getResData() {
//     el.innerHTML = "";

//     fetch("https://developers.zomato.com/api/v2.1/cuisines?city_id=1138", {
//         headers: {
//             "Accept": "application/json",
//             "user-key": "09575da97a7b2eff9ebe08ad48a9d40"
//         }
//     })
//         .then(results => results.json())
//         .then(parks => {
//             parks.forEach(park => {
//                 console.log(park);
//                 const parkAsHTML = parkFactory(park);
//                 addParkToDom(parkAsHTML);
//             })
//         })

// getParkData();


// function parkFactory(park) {
//     return `
//     <h1> ${park.restaurant.name} </h1>
//     <h2> ${park.location.address} </h2>
//     `
// }

// addParkToDom = (taco) => {
//     el.innerHTML += taco;
// };



// fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=5&cuisines=mexican", {
//     "headers": {
//         "Accept": "application/json",
//         "user-key": "09575da97a7b2eff9ebe08ad48a9d40"
//     }
// })
//     .then(results => results.json())
//     .then(parsedRes => {
//         console.table("parsed Restaurants", parsedRes) 
//         for(let i = 0; i < parsedRes.restaurants.length ; i++) {
//         let resName = parsedRes.restaurants[i].restaurant.name;
//         let resAddress = parsedRes.restaurants[i].restaurant.location.address;
//         console.log(resName, resAddress)
//     }})
const resKey = "009575da97a7b2eff9ebe08ad48a9d40"
let foodOptions = document.getElementById("foodOptions");
//Colects the div that the itinerary is going into
let itinerary = document.getElementById("itineraryList");
let cuisineTypeNumber = "";

console.log(cuisineTypeNumber);

let restaurantChoices = function () {
    // fetch restaurant data
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=5&cuisines=${cuisineTypeNumber}`, {
        "headers": {
            "user-key": (resKey)
        }
    })
    .then(response => response.json())
    .then(restaurantChoices => {
        console.table("restaurant choices", restaurantChoices);
        //The button that will eventually erase/minimize the html added for the list
        let minButton = document.getElementById("displayResults")
        minButton.innerHTML += `<button id = "minimizeList">Minimize</button>`
        for (var i = 0; i < restaurantChoices.restaurants.length; i++) {
            let restaurantName = restaurantChoices.restaurants[i].restaurant.name
            let restaurantAddress = restaurantChoices.restaurants[i].restaurant.location.address
            let resultsDiv = document.getElementById("displayResults")
            resultsDiv.innerHTML += `<div id = "foodDiv[i]">
            <h2 id="resName">${restaurantName}</h2>
            <p id="resAddress">${restaurantAddress}</p>
            <button id = "foodSave[i]"  onclick="addToItinerary()">SAVE</button>
            </div>`
            
        }

    })
}
//select a cuisine type    
foodOptions.onchange = function () {
    cuisineTypeNumber = foodOptions.options[foodOptions.selectedIndex].value;
    // console.table represents data in console as table
    restaurantChoices()
    console.log("cuisine type number", cuisineTypeNumber)
    // console.log(restaurantChoices());
}

function addToItinerary() {
    let resName = document.getElementById("resName")
    let resAddress = document.getElementById("resAddress")
    resName.innerHTML += itinerary
    resAddress.innerHTML += itinerary
}
