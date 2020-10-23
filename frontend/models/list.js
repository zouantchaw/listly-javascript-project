class List {
    constructor(name, id=null) {
        this.id = id;
        this.name = name;
        this.itemsArray = []
    }

    // Renders List name to DOM 
    renderNewList(name) {
        const listNav = document.querySelector(".all-lists")
        let listElement = document.createElement('li')
        listElement.className = "list-item"
        listElement.innerText = name
        listNav.appendChild(listElement)
    }
}

