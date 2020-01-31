// zadanie 3

document.querySelector("form .btn").addEventListener("click", function (e) {
    const firstTeamName = document.querySelector("#team1").value;
    const secondTeamName = document.querySelector("#team2").value;
    const firstTeamScore = document.querySelector("#points1").value;
    const secondTeamScore = document.querySelector("#points2").value;


    e.preventDefault();
    if( firstTeamName !== secondTeamName  &&
        firstTeamScore >= 0 &&
        secondTeamScore >= 0) {

        const firstTeamEl = document.createElement("td");
        firstTeamEl.innerText = firstTeamName

        const secondTeamEl = document.createElement("td");
        secondTeamEl.innerText = secondTeamName

        const teamScoresEl = document.createElement("td")
        teamScoresEl.innerText = `${firstTeamScore} - ${secondTeamScore}`

        const newRowTable = document.createElement("tr")
        newRowTable.appendChild(firstTeamEl)
        newRowTable.appendChild(secondTeamEl)
        newRowTable.appendChild(teamScoresEl)

        document.querySelector("table.table tbody").appendChild(newRowTable);

    }
})
