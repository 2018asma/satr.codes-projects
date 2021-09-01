// Add Book:
function addBook(id, title, author, price, quantity) {
  const book = {
    id,
    title,
    author,
    price,
    quantity,
  };
  return book;
}

//Search For Book:
function search(keyword) {
  let bookFounded = books.find(
    (item) =>
      item.id === keyword || item.title === keyword || item.author === keyword
  );
  if (bookFounded) {
    return bookFounded;
  } else {
    return "book not founded";
  }
}

// Sell Book And Make Recipe
function sellBook(title, quantity, balance) {
  let result = search(title);
  let avalibalQuantity = result.quantity;
  let bookPrice = result.price;
  if(result !== 'book not founded' ){
    if (avalibalQuantity >= quantity && bookPrice <= balance) {
        console.log("Thank You, Your Order Is DONE 😍 ");
        books = books.filter((item) => item.id !== result.id);
        result = { ...result, quantity: result.quantity - quantity };
        books = [...books, result];
      } else if (avalibalQuantity < quantity) {
        console.log("quantity not enough");
      } else if (bookPrice > balance) {
        console.log("Your Balance Not enough");
      }
  } else{
      return result
  }

 
}

let books = [];

books.push(addBook(1, "Start with why", "Simon Sinek", 80, 13));
books.push(addBook(2, "But how do it know", "J. Clark Scott", 59.5, 22));

console.log(books);

sellBook("Start with why", 9, 80);
sellBook("Start with why", 4, 80);
sellBook("Start with why", 4, 80);

console.log(books);

