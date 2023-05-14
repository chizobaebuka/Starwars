let url = "https://swapi.dev/api/people";
fetch(url)
  .then(response => {
    return response.json()
  })
  .then(data => {
    // console.log(data)
    data.results.forEach(character => {
      let imagePath = `./assets/${character.name}.jpeg`;
      let characterName = `<li>${character.name}</li>`;
      let characterInfo = `Gender: ${character.gender}, Height: ${character.height} cm`;

      let buttonElement = 
      `<div class="box">
        <li class="Container">
            <div>
                <img class="image" src="${imagePath}" alt="${character.name}" />
            </div>

            <button onClick="showCharacterInfo ('${character.name}', '${characterInfo}')">${characterName}</button>

            <div class="info"></div>
        </li>
      </div>`;
      document.querySelector('ul').insertAdjacentHTML('beforeend', buttonElement);
    })
    // console.log(data);
  })
  .catch(error => console.log(error));

function showCharacterInfo(name, info) {
  alert(`${name}: ${info}`);
}
