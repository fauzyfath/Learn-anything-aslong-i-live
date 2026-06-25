const footballTeam = {
    team: "ENGLAND",
    year: 2026,
    headCoach: "THOMAS TUCHLE",
    players: [
        {name: "DECLAN RICE", position: "midfielder", isCaptain: false},
        {name: "HARRY KANE", position: "forward", isCaptain: true},
        {name: "JUDE BELLINGHAM", position: "midfielder", isCaptain: false},
        {name: "EBERECHI EZE", position: "midfielder", isCaptain: false},
        {name: "BUKAYO SAKA", position: "forward", isCaptain: false},
        {name: "MORGAN ROGGERS", position: "forward", isCaptain: false},
        {name: "DAVID RAYA", position: "goalkeeper", isCaptain: false},
        {name: "WILLIAM SALIBA", position: "defender", isCaptain: false},
        {name: "GABRIEL MAGALHAES", position: "defender", isCaptain: false},
        {name: "RICARDO CALAFIORI", position: "defender", isCaptain: false},
        {name: "RECEE JAMES", position: "defender", isCaptain: false},
    ]
}

const teamEl = document.getElementById("team");
const headCoachEl = document.getElementById("head-coach");
const yearEl = document.getElementById("year");

const optionsEL = document.getElementById("players");
const playerCardEL = document.getElementById("player-cards");

teamEl.innerText = footballTeam.team;
headCoachEl.innerText = footballTeam.headCoach;
yearEl.innerText = footballTeam.year;

optionsEL.addEventListener("change", (event) => {
    const options = event.target.value;
    updatePlayerCard(options);
})

const updatePlayerCard = userOptions => {
    playerCardEL.innerHTML = ""
    if(userOptions == "all"){
        footballTeam.players.forEach(element => {
            if(element.isCaptain == true){
                playerCardEL.innerHTML += `
                    <div class="player-card">
                        <h2>(Captain) ${element.name}</h2>
                        <p>Position: ${element.position}</p>
                    </div ">
                `
            }
            else{
                playerCardEL.innerHTML += `
                    <div class="player-card">
                        <h2>${element.name}</h2>
                        <p>Position: ${element.position}</p>
                    </div ">
                `
            }
        });
    }

    else {
        footballTeam.players.filter((el) => el.position == userOptions).forEach(element => {
            if(element.isCaptain ==true){
                playerCardEL.innerHTML += `
                    <div class="player-card">
                        <h2>(Captain) ${element.name}</h2>
                        <p>Position: ${element.position}</p>
                    </div ">
                `
            }
            else{
                playerCardEL.innerHTML += `
                    <div class="player-card">
                        <h2>${element.name}</h2>
                        <p>Position: ${element.position}</p>
                    </div ">
                `
            }
        })
    }
}

document.addEventListener("DOMContentLoaded",() => {
    updatePlayerCard("all")
})