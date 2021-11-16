const BookList = [
  {
    id: "1",
    title: "The Death of Magic",
    author: "Marisa Mills",
    price: 2800,
    image: "./images/bookcover.jpeg",
  },
  {
    id: "2",
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: 2000,
    image: "./images/bookcover2.jpeg",
  },
  {
    id: "3",
    title: "The Great Gatsby",
    author: "F.Scott Fitzgerald",
    price: 1000,
    image: "./images/bookcover3.jpeg",
  },
  {
    id: "4",
    title: "Solar Bones",
    author: "Mike McCormack",
    price: 3500,
    image: "./images/bookcover4.jpeg",
  },
  {
    id: "5",
    title: "A Kingdom of Dreams",
    author: "Judith McNaught",
    price: 1500,
    image: "./images/bookcover5.jpeg",
  },
  {
    id: "6",
    title: "The Poppy Wife",
    author: "Caroline Scott",
    price: 500,
    image: "./images/bookcover6.jpeg",
  },
  {
    id: "7",
    title: "A Day Like This",
    author: "Kelly McNeil",
    price: 2800,
    image: "./images/bookcover7.jpeg",
  },
  {
    id: "8",
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    price: 4500,
    image: "./images/bookcover8.jpeg",
  },
  {
    id: "9",
    title: "Jaws",
    author: "Peter Benchley",
    price: 1000,
    image: "./images/bookcover9.jpeg",
  },
];

var users = [
  {
    id: "111",
    email: "dusty@mail.com",
    name: "Dustin",
    lastName: "Hagstrom",
    password: "password",
    favoriteItems: ["234"],
  },
];

export const logInUser = (email, password) =>
  new Promise((resolve, reject) => {
    const userFound = users.find((user) => {
      if (user.email === email && user.password === password) {
        return true;
      }
      return false;
    });
    console.log("fetching user data from imaginary products database");
    setTimeout(() => {
      try {
        // fetching user data from imaginary database
        if (userFound) {
          resolve(userFound);
        }
        throw new Error("Incorrect username or password");
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });

export const fetchProducts = () =>
  new Promise((resolve, reject) => {
    console.log("fetching Data from imaginary products database");
    setTimeout(() => {
      try {
        resolve(BookList);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
