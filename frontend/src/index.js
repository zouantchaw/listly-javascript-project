// Selectors 
const listNav = document.getElementById("all-lists")

document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:3000/lists")
    .then(response => response.json())
    .then(json => loadLists(json))
})

function loadLists(object) {
    for (const list of object) {
        let listItemDiv = document.createElement('div')
        listItemDiv.className = "todo"
        let listItem
        let listElement = document.createElement('li')
        listElement.className = "list-item"
        listElement.innerText = list.name 
        listNav.appendChild(listElement)
    }
}