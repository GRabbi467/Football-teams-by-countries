const search = async()=>{
    const searchField = document.getElementById('search-field');
    const searchText  = searchField.value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=${searchText}`;
    // fetch(url).then(res => res.json()).then(data => showTeams(data.teams)); used if not async used 
    const res = await fetch(url);
    const data = await res.json();
    showTeams(data.teams);

}

const showTeams= teams =>{
    const searchResult = document.getElementById('search-result');
    teams.forEach(team => {


        const div = document.createElement('div');
        div.classList.add('col');
        
        
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${team.strAlternate}</h5>
          <p class="card-text">${team.strDescriptionEN.slice(0,200)}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Established :${team.intFormedYear}</li>
          <li class="list-group-item">Stadium : ${team.strStadium}</li>
          <li class="list-group-item">Location: ${team.strStadiumLocation}</li>
        </ul>
        <div class="card-body">
          <a href="${team.strWebsite}" target="_blank" class="card-link">Website</a>
          <a href="${team.strTwitter}" class="card-link">Twitter</a>
          <a href="${team.strYoutube}" class="card-link">YouTube</a>
        </div>
    </div>

        `
        searchResult.append(div);

        
    });
}