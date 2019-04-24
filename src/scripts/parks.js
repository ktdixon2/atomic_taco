console.log("hello");

const el = document.querySelector(".park-container");

let allData = [];

function getParkData() {
    el.innerHTML = "";

    fetch("https://data.nashville.gov/resource/74d7-b74t.json")
        .then(results => results.json())
        .then(parks => {
            allData = parks
            parks.forEach(park => {
                console.log(park);
                const parkAsHTML = parkFactory(park);
                addParkToDom(parkAsHTML);
            })
          })
}

getParkData();

// steps - identify select box, then add event listener for selection change
// 2. when it changes clear the page
// 3. get a filtered list
// 4. re-render all to dom

function parkFactory(park) {
    const addressFix = JSON.parse(park.mapped_location.human_address);
    return `
    <div id="basic-info">
    <h1> ${park.park_name} </h1>
    <h2> ${addressFix.address} </h2>
    <h3> Size: ${park.acres} Acres </h3>
    </div>

    <div id="community">
    <h3> Community </h3>
    <p> Community Center: ${park.community_center} </p>
    <p> Nature Center: ${park.nature_center} </p>
    <p> Community Garden: ${park.community_garden} </p>
    <p> Picnic Shelter: ${park.picnic_shelters_quantity} </p>
    <p> Dog Park: ${park.dog_park} </p>
    <p> Accessible: ${park.ada_accessible} </p>
    <p> Restrooms: ${park.restrooms_available} </p>
    </div>

    <div id="kids">
    <h3> Kids </h3>
    <p> Playground: ${park.playground} </p>
    <p> Spray Park: ${park.spray_park} </p>
    </div>

    <div id="trails">
    <h3> Trails </h3>
    <p> Walking/Jogging Trails: ${park.walk_jog_paths} </p>
    <p> Hiking Trails: ${park.hiking_trails} </p>
    <p> Horse Trails: ${park.horse_trails} </p>
    <p> Mountain Biking Trails: ${park.mountain_bike_trails} </p>
    </div>

    <div id="sports">
    <h3> Sports </h3>
    <p> Baseball Field: ${park.baseball_fields} </p>
    <p> Soccer Field: ${park.soccer_fields} </p>
    <p> Basketball Court: ${park.basketball_courts} </p>
    <p> Volleyball: ${park.volleyball} </p>
    <p> Golf Course: ${park.golf_course} </p>
    <p> Disc Golf: ${park.disc_golf} </p>
    <p> Tennis Court: ${park.tennis_courts} </p>
    <p> Skate Park: ${park.skate_park} </p>
    </div>

    <div id="lakes">
    <h3> Lakes </h3>
    <p> Lake: ${park.lake} </p>
    <p> Boat Launch: ${park.boat_launch} </p>
    <p> Canoe Launch: ${park.canoe_launch} </p>
    <p> Fishing: ${park.fishing_by_permit} </p>
    </div>
    `
}

addParkToDom = (taco) => {
    el.innerHTML += taco;
};

/*
 function menu() {
    const selectEl = document.getElementById("parksDropdown");
}


allData.filter(select => select.id === 'Yes').map(select => select.'');
*/