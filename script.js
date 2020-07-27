// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let pilotNameInput = document.getElementById("pilotName");
        let copilotNameInput = document.getElementById("copilotName");
        fuelLevelInput = Number(document.getElementById("fuelLevel").value); // it's a number!!!
        cargoMassInput = Number(document.getElementById("cargoMass").value); // this is too!  Hooray!!!
        if (pilotNameInput.value === "" || copilotNameInput === "" || fuelLevelInput < 10000 || cargoMassInput > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").style.backgroundColor = "red";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready For Launch";
            if (pilotNameInput.value === "") {
                document.getElementById("pilotStatus").innerHTML = "Pilot not ready";
            }
            if (copilotNameInput.value === "") {
                document.getElementById("copilotStatus").innerHTML = "Copilot not ready";
            }
            if (fuelLevelInput < 10000) {
                document.getElementById("fuelStatus").innerHTML = "Fuel level too low";
            }
            if (cargoMassInput > 10000) {
                document.getElementById("cargoStatus").innerHTML = "Too much cargo";
            }
            event.preventDefault();
            return
        } else {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").style.backgroundColor = "green";
            document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
            event.preventDefault();
            return
        }

    });
    fetch("https://https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then(function(json) {
            missionTarget = document.getElementById("missionTarget")
            missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${json[0].name}</li>
                <li>Diameter: ${json[0].diameter}</li>
                <li>Star: ${json[0].star}</li>
                <li>Distance from Earth: ${json[0].distance}</li>
                <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}">`
        });
    });
});
