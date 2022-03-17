const baseUrl = 'https://swapi.dev/api/'

// export functions for each getDATA
//will look something like this:

//export function getSpellDetails(spellName) {
//   return fetch(`${baseUrl}/api/spells/${spellName}`)
//   .then(res => res.json())
// }

// Use named exports to expose AJAX functionality as needed, e.g., export function getAllStarships() {...}to obtain all starships.

export function getAllStarships() {
  return fetch(`${baseUrl}/api/starships/`)
  .then(res => res.json())
}

// todo figure out what goes in template literal
// export function getAllStarships() {
//   return fetch(`${baseUrl}/api/starships/${}`)
//   .then(res => res.json())
// }
