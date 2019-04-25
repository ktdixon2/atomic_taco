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
        minButton.innerHTML += `<button id = "minimizeList" onClick(minimizeResults)>Minimize</button>`
        for (var i = 0; i < restaurantChoices.restaurants.length; i++) {
            let restaurantName = restaurantChoices.restaurants[i].restaurant.name
            let restaurantAddress = restaurantChoices.restaurants[i].restaurant.location.address
            resultsDiv = document.getElementById("displayResults")
            resultsDiv.innerHTML += `<div id = "foodDiv[i]">
            <h2 class="resName">${restaurantName}</h2>
            <p class="resAddress">${restaurantAddress}</p>
            <button class = "foodSave">SAVE</button>
            </div>`
        }
        const saveBtn = document.querySelectorAll(".foodSave")
        saveBtn.forEach ( button => {
            button.addEventListener("click", ( event => {
                addToItinerary(event)
            }))
        })
        

    })
}

function restaurantToDom(toBeAdded){
    document.getElementById("resultsContainer").innerHTML += toBeAdded;
}
//select a cuisine type
foodOptions.onchange = function () {
    cuisineTypeNumber = foodOptions.options[foodOptions.selectedIndex].value;
    // console.table represents data in console as table
    restaurantChoices()
    console.log("cuisine type number", cuisineTypeNumber)
    // console.log(restaurantChoices());
}

// // console.log(cuisineTypeNumber);

//         // console.table("restaurant choices", restaurantChoices);
//         minButton.innerHTML += `<button id = "minimizeList" onClick(minimizeResults)>Minimize</button>`
//             <h2 class="resName">${restaurantName}</h2>
//             <p class="resAddress">${restaurantAddress}</p>
//             <button class = "foodSave">SAVE</button>
//         const saveBtn = document.querySelectorAll(".foodSave")
//         saveBtn.forEach ( button => {
//             button.addEventListener("click", ( event => {
//                 addToItinerary(event)
//             }))
//         })
        

function restaurantToDom(toBeAdded){
    document.getElementById("itineraryList").innerHTML += toBeAdded;
}
    
    itinerary.innerHTML += resultsDiv
function minimizeResults(){
document.querySelector("#displayResults").innerHTML= "";
}