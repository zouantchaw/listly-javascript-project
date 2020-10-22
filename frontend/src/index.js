// Server URLS 
const BASE_URL = "http://localhost:3000/";
const LISTS_URL = `${BASE_URL}/lists`;

// Selectors 
const listNav = document.querySelector(".all-lists")
const taskList = document.querySelector(".task-list")

// Actions for when the DOM Loads 
document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM LOADED BABAY')
    fetchLists()
});

// Fetches All Lists from server and passes it to displayListAndItems()
function fetchLists() {
    fetch(LISTS_URL)
    .then(resp => resp.json())
    .then(json => displayListAndItems(json))
}

// Adds Lists and contents of first list to the DOM on page load
function displayListAndItems(json) {
    document.querySelector('#main-section-header').innerHTML = json[0].name
    for (const list of json) {
        let listElement = document.createElement('li')
        listElement.className = "list-item"
        listElement.innerText = list.name 
        listNav.appendChild(listElement)
    }
    for (const listItem of json[0].list_items) {
        let listItemDiv = document.createElement('div')
        listItemDiv.className = "todo"

        let listItemLi = document.createElement('li')
        listItemLi.className = "todo-item"
        listItemLi.innerText = listItem.content

        let listItemBtn1 = document.createElement('button')
        listItemBtn1.className = "complete-btn"
        listItemBtn1.innerHTML = `<i class="fas fa-check"></i>`

        let listItemBtn2 = document.createElement('button')
        listItemBtn2.className = "trash-btn"
        listItemBtn2.innerHTML = `<i class="fas fa-trash"></i>`

        listItemDiv.appendChild(listItemLi)
        listItemDiv.appendChild(listItemBtn1)
        listItemDiv.appendChild(listItemBtn2)
        taskList.appendChild(listItemDiv)
    } 
    // Calls function to tag event listeners to each list
    tagEvents()
};

//tags events listeners to lists after page has loaded 
function tagEvents() {
   const lists = document.getElementsByClassName('list-item')
   for (const list of lists) {
       list.addEventListener('click', () => {
        displayClickedList(list.innerText)
       } )
   }
}

function displayClickedList(listName) {
    console.log(listName)
    // debugger
    // fetch(LISTS_URL)
    // .then(resp => resp.json())
    // .then(json => console.log(json))
}


const allLists = () => {
    fetch(LISTS_URL)
    .then(resp => resp.json())
    .then(json => {
        console.log(json)  
    })
}