const bookForm = document.getElementById("bookForm");

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var input_img = document.getElementById("img");
  var book_info;
  var fReader = new FileReader();
  try {
    fReader.readAsDataURL(input_img.files[0]);
  } catch (error) {
    console.log(error);
  }

  fReader.onload = function (e) {
    //waits until the result of the FileReader is ready
    let img_base64 = fReader.result;
    book_info = {
      name: document.getElementById("book").value,
      author: document.getElementById("author").value,
      publicationdate: document.getElementById("publicationdate").value,
      // img: document.getElementById("img").value,
      img: img_base64,
    };
    fetch("http://localhost:3000/book/addBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(book_info),
    });
  };
});
