const BASE_URL = "http://localhost:3000/";
const LISTS_URL = `${BASE_URL}/lists`;

// Selectors 
const listNav = document.querySelector(".all-lists")


// When the DOM Loads:
// Render all lists in the left nav 
// Render the first lists contents on main screen

document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM LOADED BABAY')
    fetchLists()
});

// Fetches All Lists from server 
function fetchLists() {
    fetch(LISTS_URL)
    .then(resp => resp.json())
    .then(json => displayListAndItems(json))
}

function displayListAndItems(json) {
    for (const list of json) {
        // let listItemDiv = document.createElement('div')
        // listItemDiv.className = "todo"
        let listElement = document.createElement('li')
        listElement.className = "list-item"
        listElement.innerText = list.name 
        listNav.appendChild(listElement)
    }
};






// document.addEventListener("DOMContentLoaded",  () {
//     fetch("http://localhost:3000/lists")
//     .then(response => response.json())
//     .then(json => loadLists(json))
// })

// function loadLists(object) {
//     for (const list of object) {
//         let listItemDiv = document.createElement('div')
//         listItemDiv.className = "todo"
//         // let listItem
//         let listElement = document.createElement('li')
//         listElement.className = "list-item"
//         listElement.innerText = list.name 
//         listNav.appendChild(listElement)
//     }
// }