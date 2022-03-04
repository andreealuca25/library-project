async function getBooks() {
  let books_list;
  const response = await fetch("http://localhost:3000/book/displayBook", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    books_list = await response.json();
  }

  let book_number = 0;
  let shelf_number = 0;
  let library = document.getElementsByClassName("library")[0];

  for (book of books_list) {
    //values of iterable objects
    let shelf = document.getElementsByClassName("shelf")[shelf_number];
    let new_book = document.getElementsByClassName("book-cover")[book_number];

    let book_clone = new_book.cloneNode(false);
    book_clone.src = book["img"];
    shelf.appendChild(book_clone);
    book_number++;
    if ((book_number + 1) % 3 == 0 && book_number != 0) {
      //we only store 3 books on each shelf
      console.log("aici");
      let shelf_clone = shelf.cloneNode(false);
      library.appendChild(shelf_clone);
      shelf_number++;
    }
  }
}

getBooks();
