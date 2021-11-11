let bookList = []

let nameElement = document.getElementById("book-name-input")
let authorElement = document.getElementById("book-author-input")
let priceElement = document.getElementById("book-price-input")

let bookContainer = document.getElementById("book-container")

const addNewBook = () => {
    let newBook = {
        name: nameElement.value,
        author: authorElement.value,
        price: Number(priceElement.value)
    }
    bookList.push(newBook)

    loadBooks()
    // console.log(bookList)

}

const loadBooks = () => {
    let table = `<table>
                    <tr>
                        <th>Book Name</th>
                        <th>Book Price</th>
                        <th>Book Price</th>

                    </tr>
             `
    for (let book of bookList) {
        table += `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.price}</td>
                </tr>`
    }
    table += `</table>`
    bookContainer.innerHTML = table
}