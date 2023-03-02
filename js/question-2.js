//const apiKey = 9413a4dcf7c54728b1a4c54436efeed0;
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

            resultContainer.innerHTML += `<div class="result">Name: ${gameInfo[i].name}. 
            Rating: ${gameInfo[i].rating}. Number of tags: ${gameInfo[i].tags.length} </div>`;
        }
            
    } catch (error) {
       console.log("ERROR");
       resultContainer.innerHTML = `<div class="error">There was an error</div>`;
    }
}
getGames();