// Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

// There’s a built-in array method called .reverse() that does a lot of this work for you, but you’re NOT allowed to use it here!

// Write your code here:
function reverseArray(inputArray) {
  const reverseArray = [];
  for (let i = inputArray.length - 1; i >= 0; i--) {
    reverseArray.push(inputArray[i]);
  }
  return reverseArray;
}

const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence));

// Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

// The greeting should take the following format:
// “Oh powerful [stringElement], we humans offer our unconditional surrender!”
// Note: You may have noticed how convenient it would be to use .forEach(), but you’re not allowed to use it here.
// Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

const greetAliens = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      "Oh powerful " + arr[i] + ", we humans offer our unconditional surrender!"
    );
  }
};

/*
// Alternate solutions:

// Using string interpolation
const greetAliens = arr
for (let i = 0; i<arr.length; i++){
console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
}

// As a function declaration:
function greetAliens(arr) {
for (let i = 0; i<arr.length; i++){
console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
}
}

*/

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

// Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.
// Note: You may have noticed how convenient it would be to use map, but you’re not allowed to use it here.
// Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

const convertToBaby = (arr) => {
  const babyArray = [];
  for (let i = 0; i < arr.length; i++) {
    babyArray.push("baby " + arr[i]);
  }
  return babyArray;
};

/*
// As a function declaration:
function convertToBaby(arr) {
  const babyArray = [];
  for (let i = 0; i < arr.length; i++) {
        babyArray.push('baby ' + arr[i]);
  }
  return babyArray
}
*/

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

console.log(convertToBaby(animals));

// Write a function shoutGreetings() that takes in an array of strings and returns a new array.
// This new array should contain all the strings from the argument array but with capitalized letters and an
// exclamation point appended to the end: 'heya' will become 'HEYA!'

const shoutGreetings = (arr) => arr.map((word) => word.toUpperCase() + "!");

/*
// As a function declaration AND using a loop:
function shoutGreetings(arr) {
    let shoutArray = []
    for(let i = 0; i<arr.length; i++){
        shoutArray.push(arr[i].toUpperCase() + '!')
    }
    return shoutArray
}
*/
const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];

console.log(shoutGreetings(greetings));

// Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.

const sortYears = (arr) => arr.sort((x, y) => y - x);

/*
// As a function declaration AND using a named function:
function sortYears(arr) {
      const checkYears = (year1, year2) => year2 - year1
      return arr.sort(checkYears)
}
*/

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

console.log(sortYears(years));

// Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

const justCoolStuff = (firstArray, secondArray) =>
  firstArray.filter((item) => secondArray.includes(item));

/*
// As a function declaration AND using named function w/ a loop:
function justCoolStuff(firstArray, secondArray) {
      function isInSecondArray(item){
            for(let i = 0; i<secondArray.length; i++){
                  if (secondArray[i] === item){
                        return true
                  }
            }
            return false 
      }
      return firstArray.filter(isInSecondArray)
}
*/

const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "fruit-by-the-foot",
  "pogs",
  "my room",
  "temporary tattoos",
];

const myStuff = [
  "rules",
  "fruit-by-the-foot",
  "wedgies",
  "sweaters",
  "skateboards",
  "family-night",
  "my room",
  "braces",
  "the information superhighway",
];

console.log(justCoolStuff(myStuff, coolStuff));

// Write a function isTheDinnerVegan() that takes in an array of food objects in the format:
// and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

const isTheDinnerVegan = (arr) => arr.every((food) => food.source === "plant");

/*
// Alternate solution:
// Using a function declaration, loop, and helper function:
function isTheDinnerVegan(arr) {
      const isVegan = (food) => {
            if (food.source === 'plant') {
                  return true;
            }
            return false;
      }
      for(let i = 0; i<arr.length; i++){
            if (!isVegan(arr[i])){
                  return false 
            }
      }
      return true
}
*/

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(isTheDinnerVegan(dinner));

// Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:
// and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth).
// You’ll need to access each object’s .numTeeth property. Feel free to either write a named comparison function, or use an anonymous function for your argument to .sort().

const speciesArray = [
  { speciesName: "shark", numTeeth: 50 },
  { speciesName: "dog", numTeeth: 42 },
  { speciesName: "alligator", numTeeth: 80 },
  { speciesName: "human", numTeeth: 32 },
];

const sortSpeciesByTeeth = (arr) =>
  arr.sort(
    (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
  );

/*
// As a function declaration AND using a named function:
function sortSpeciesByTeeth(arr) {
      const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
      return arr.sort(compareTeeth)
}
*/

console.log(sortSpeciesByTeeth(speciesArray));

// Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'.
// If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1.

// Write your code here:
const findMyKeys = (arr) => arr.findIndex((item) => item === "keys");

/*
// Alternate solution:
// As a function declaration using a loop:
function findMyKeys(arr) {
      let index = -1;
      for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'keys') {
                  index = i
                  break
            }
      }
      return index
}
*/

const randomStuff = [
  "credit card",
  "screwdriver",
  "receipt",
  "gum",
  "keys",
  "used gum",
  "plastic spoon",
];

console.log(findMyKeys(randomStuff));
// Should print 4

// Write a function, dogFactory(). It should:

// have 3 parameters: name, breed, and weight (in that order)
// expect name and breed to be strings
// expect weight to be a number
// return an object
// have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in

// Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

// Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.

const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    set name(newName) {
      this._name = newName;
    },
    get breed() {
      return this._breed;
    },
    set breed(newBreed) {
      this._breed = newBreed;
    },
    get weight() {
      return this._weight;
    },
    set weight(newWeight) {
      this._weight = newWeight;
    },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      this._weight++;
    },
  };
};
// Create a dog using the dogFactory
const myDog = dogFactory("Buddy", "Golden Retriever", 25);

// Call the bark method
console.log(myDog.bark()); // Output: ruff! ruff!

// Log the initial weight
console.log("Initial Weight:", myDog.weight); // Output: Initial Weight: 25

// Call the eatTooManyTreats method
myDog.eatTooManyTreats();

// Log the updated weight
console.log("Updated Weight:", myDog.weight); // Output: Updated Weight: 26
