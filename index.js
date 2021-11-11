let nameElement = document.getElementById("book-name-input")
let authorElement = document.getElementById("book-author-input")
let priceElement = document.getElementById("book-price-input")

let bookContainer = document.getElementById("book-container")

const addNewBook = () => {
    if (nameElement.value === '' || authorElement.value === '') {
        alert("Name or author field is empty. Please try again.")
        return
    }
    let newId = Math.floor((Math.random() * 100000) + 1)

    let newBook = {
        id: newId,
        name: nameElement.value,
        author: authorElement.value,
        price: Number(priceElement.value)
    }

    let jsonArray = localStorage.getItem("books-list")
    let booksList = JSON.parse(jsonArray)

    if (booksList === null) {
        booksList = []
    }

    booksList.push(newBook)

    let toJson = JSON.stringify(booksList)
    localStorage.setItem("books-list", toJson)

    loadBooks()

    nameElement.value = ''
    authorElement.value = ''
    priceElement.value = ''
}

const loadBooks = () => {
    let jsonArray = localStorage.getItem("books-list")
    let booksList = JSON.parse(jsonArray)

    if (booksList === null) {
        return
    }

    let table = `<table>
                    <tr>
                        <th>Book Name</th>
                        <th>Book Price</th>
                        <th>Book Price</th>
                        <th style="color: red;">delete</th>
                    </tr>
             `
    for (let book of booksList) {
        table += `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.price}</td>
                    <td><button onclick="handleDeleteBookById(${book.id})">x</button></td>
                </tr>`
    }
    table += `</table>`
    bookContainer.innerHTML = table
}

const handleDeleteBookById = (id) => {
    let jsonArray = localStorage.getItem("books-list")
    let booksList = JSON.parse(jsonArray)
    let filteredBooksList = booksList.filter(el => el.id !== id)
    booksList = filteredBooksList
    let toJson = JSON.stringify(booksList)
    localStorage.setItem("books-list", toJson)
    loadBooks()
}