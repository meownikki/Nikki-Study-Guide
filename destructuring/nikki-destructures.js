let hiking = {
  weather: "Snowy",
  location: "City Park",
  hikingShoes: "hiking boots",
  items: ["jacket", "stuff1", "base layer", "kindling"],
  user: {
    name: "Nikki",
    exp: 100
  }
}

// console.log(hiking.weather);

let { user } = hiking;
// let { name } = user;
let { user: exp } = hiking; // deep destructuring

console.log(exp);
