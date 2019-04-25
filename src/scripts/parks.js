console.log("hello");

const el = document.querySelector(".park-container");


let theMenu = document.getElementById("parksDropdown");
console.log("menu", theMenu);


function getParkData(feature) {
    el.innerHTML = "";
    console.log("feature", feature);

    fetch("https://data.nashville.gov/resource/74d7-b74t.json")
        .then(results => results.json())
        .then(parks => {
            parks.forEach(park => {
                if (feature === "kids") {
                    if (park.playground === "Yes" || park.spray_park === "Yes") {
                        console.log(park);
                        const parkAsHTML = parkFactory(park);
                        addParkToDom(parkAsHTML);
                    }
                }
                if (feature === "dogs") {
                    if (park.dog_park === "Yes") {
                        console.log(park);
                        const parkAsHTML = parkFactory(park);
                        addParkToDom(parkAsHTML);
                    }
                }
                if (feature === "centers") {
                    if(park.community_center === "Yes" || park.nature_center === "Yes") {
                        console.log(park);
                        const parkAsHTML = parkFactory(park);
                        addParkToDom(parkAsHTML);
                    }
                }
                if (feature === "baseball") {
                    if(park.baseball_fields === "Yes") {
                        console.log(park);
                        const parkAsHTML = parkFactory(park);
                        addParkToDom(parkAsHTML);
                    }
                }
                if (feature === "basketball") {
                    if(park.basketball_courts === "Yes") {
                        console.log(park);
                        const parkAsHTML = parkFactory(park);
                        addParkToDom(parkAsHTML);
                    }
                }
                if (feature === "soccer") {
                    if(park.soccer_fields === "Yes") {
                        console.log(park);
                        const parkAsHTML = parkFactory(park);
                        addParkToDom(parkAsHTML);
                    }
                }
                if (feature === "volleyball") {
                    if(park.volleyball === "Yes") {
                        console.log(park);
                        const parkAsHTML = parkFactory(park);
                        addParkToDom(parkAsHTML);
                    }
                }
                if (feature === "golf") {
                    if(park.golf_course === "Yes") {
                        console.log(park);
                        const parkAsHTML = parkFactory(park);
                        addParkToDom(parkAsHTML);
                    }
                }
                if (feature === "skate") {
                    if(park.skate_park === "Yes") {
                        console.log(park);
                        const parkAsHTML = parkFactory(park);
                        addParkToDom(parkAsHTML);
                    }
                }
                if (feature === "tennis") {
                    if(park.tennis_courts === "Yes") {
                        console.log(park);
                        const parkAsHTML = parkFactory(park);
                        addParkToDom(parkAsHTML);
                    }
                }
                if (feature === "hiking") {
                    if(park.hiking_trails === "Yes") {
                        console.log(park);
                        const parkAsHTML = parkFactory(park);
                        addParkToDom(parkAsHTML);
                    }
                }
                if (feature === "lakes") {
                    if(park.lake === "Yes") {
                        console.log(park);
                        const parkAsHTML = parkFactory(park);
                        addParkToDom(parkAsHTML);
                    }
                }
            })
        })
}


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
    </div>

    <div id="centers">
    <h3> Centers </h3>
    <p> Community Center: ${park.community_center} </p>
    <p> Nature Center: ${park.nature_center} </p>
    </div>

    <div id="kids">
    <h3> Kids </h3>
    <p> Playground: ${park.playground} </p>
    <p> Spray Park: ${park.spray_park} </p>
    </div>

    <div id="dogs">
    <h3> Dog Parks </h3>
    <p> Dog Park: ${park.dog_park} </p>
    </div>

    <div id="hiking">
    <h3> Hiking Trails </h3>
    <p> Hiking Trail: ${park.hiking_trails} </p>
    </div>

    <div id="baseball">
    <h3>  Baseball Fields </h3>
    <p> Baseball Field: ${park.baseball_fields} </p>
    </div>
    <div id="soccer">
    <h3> Soccer Fields </h3>
    <p> Soccer Field: ${park.soccer_fields} </p>
    </div>
    <div id="basketball">
    <h3> Basketball Courts </h3>
    <p> Basketball Court: ${park.basketball_courts} </p>
    </div>
    <div id="volleyball">
    <h3> Volleyball </h3>
    <p> Volleyball: ${park.volleyball} </p>
    </div>
    <div id="golf">
    <h3> Golf </h3>
    <p> Golf Course: ${park.golf_course} </p>
    </div>
    <div id="tennis">
    <h3> Tennis Courts </h3>
    <p> Tennis Court: ${park.tennis_courts} </p>
    </div>
    <div id="skate">
    <h3> Skate Parks </h3>
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

theMenu.addEventListener("change", () => {
    console.log("you changed me", theMenu.value);
    getParkData(theMenu.value)
});