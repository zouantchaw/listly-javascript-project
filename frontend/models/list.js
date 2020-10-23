class List {
    constructor(name, id=null) {
        this.id = id;
        this.name = name;
        this.itemsArray = []
        this.renderNewList(name)

    }

    // The method should not call the fetch
    // The fetch should call the method
    renderNewList(name) {
        const listNav = document.querySelector(".all-lists")
        let listElement = document.createElement('li')
        listElement.className = "list-item"
        listElement.innerText = name
        listNav.appendChild(listElement)
        const data = { name: `${name}` };
        fetch('http://localhost:3000/lists', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });

    }
}

