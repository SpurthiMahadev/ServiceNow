const friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"] },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"] },
  { name: "Alice", books: ["The Lord of the Rings", "The Shining"] },
];

// Method 1
// const allBooks = friends.reduce((acc, cur) => [...acc, ...cur.books], []);

//method 2
const allBooks = friends.flatMap((person) => person.books);
console.log(allBooks);

//method 3
// const allBooks = [].concat(...friends.map((friend) => friend.books ))

