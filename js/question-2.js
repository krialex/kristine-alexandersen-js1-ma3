const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=9413a4dcf7c54728b1a4c54436efeed0";

const resultContainer = document.querySelector(".results");


async function getGames() {
    try { 
        const response = await fetch(url);
        
        const data = await response.json();

        const gameInfo = data.results;

        console.log(gameInfo);

        resultContainer.innerHTML = "";

        for (let i = 0; i < gameInfo.length; i++) {
            if (i === 8) {
                break;
            }

            resultContainer.innerHTML += `<div class="result"><p>Name: ${gameInfo[i].name}</p> 
            <p>Rating: ${gameInfo[i].rating}</p><p>Number of tags: ${gameInfo[i].tags.length}</p></div>`;
        }
            
    } catch (error) {
       resultContainer.innerHTML = `<div class="error">There was an error</div>`;
    }
}
getGames();