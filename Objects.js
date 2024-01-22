// 1.
// Let’s use the dot operator to access the value of numCrew from the
// spaceship object in the code editor. Create a variable crewCount and assign the
// spaceship‘s numCrew property to it.

// 2.
// Again using the dot operator, create a variable planetArray and
// assign the spaceship‘s flightPath property to it.

let spaceshipFive = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

//Step 1
let crewCount = spaceship.numCrew;
//Step 2
let planetArray = spaceship.flightPath;

//Bracket Notation

let spaceshipTwo = {
  "Fuel Type": "Turbo Fuel",
  "Active Duty": true,
  homePlanet: "Earth",
  numCrew: 5,
};
spaceshipTwo["Active Duty"]; // Returns true
spaceshipTwo["Fuel Type"]; // Returns  'Turbo Fuel'
spaceshipTwo["numCrew"]; // Returns 5
spaceshipTwo["!!!!!!!!!!!!!!!"]; // Returns undefined

//   1.
// Let’s use bracket notation to access the value of 'Active Mission' from the
// spaceship object in the code editor. Create a variable isActive and assign the
// spaceship‘s 'Active Mission' property to it.

// 2.
// Using bracket notation and the propName variable provided,
// console.log() the value of the 'Active Mission' property.

let spaceshipThree = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

let propName = "Active Mission";

//Step 1
let isActive = spaceshipThree["Active Mission"];
//Step 2
console.log(isActive);

//   1.
// Reassign the color property of the spaceship object to have a value of 'glorious gold'

// 2.
// Without changing lines 1 - 6, add a numEngines property with a numeric value between 1 and 10 to the spaceship object.

// 3.
// Use the delete operator to remove the 'Secret Mission' property from the spaceship object.

let spaceshipFour = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
};

//Step 1
spaceshipFour.color = "glorious gold";
//Step 2
spaceshipFour.numEngines = 5;
//Step 3
delete spaceshipFour["Secret Mission"];

//   1.
// Below the retreatMessage variable in the code editor, create an alienShip object.
// It should contain a method retreat() which will console.log() the retreatMessage.

// 2.
// Add another method to your object literal. This method, takeOff(), should console.log() the
// string 'Spim... Borp... Glix... Blastoff!'.

// 3.
// Invoke your two methods: first .retreat() then .takeOff().

let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

//Step 1
let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  //Step 2
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};
//Step 3
alienShip.retreat();
alienShip.takeOff();

// 1.
// Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it.
// Make sure to use bracket and dot notation to get the value of the food through nested access
// (don’t just copy the value into the variable!)

// 2.
// Right now the passengers property has a value of null. Instead, assign as its value an array of objects.
// These objects should represent the spaceship‘s passengers as individual objects. Make at least one passenger object in
// the array that has at least one key-value pair on it.

// 3.
// Create a variable firstPassenger and assign the first passenger as its value
// (the element in the 0th index of the spaceship.passengers array you just made).
// Make sure to use bracket and dot notation to get the passenger object through nested access
// (don’t just copy the object into the variable!)

let spaceship = {
  passengers: [{ name: "Space Dog" }], //Step 2
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

//Step 1
let capFave = spaceship.crew.captain["favorite foods"][0];
//Step 3
let firstPassenger = spaceship.passengers[0];

//   1.
// Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.

// 2.
// Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object’s disabled property to true.

// 3.
// Call your two functions with the spaceship object in the code editor, then console.log() the spaceship object to confirm those
// properties were changed/added.

let spaceshipSix = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

//Step 1
let greenEnergy = (obj) => {
  obj["Fuel Type"] = "avocado oil";
};
//Step 2
let remotelyDisable = (obj) => {
  obj.disabled = true;
};
//Step 3
greenEnergy(spaceshipSix);
remotelyDisable(spaceshipSix);
console.log(spaceshipSix);

//   1.
// Using for...in, iterate through the spaceship.crew object in the code editor and console.log()
// a list of crew roles and names in the following format: '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.

// 2.
// Using for...in, iterate through the spaceship.crew object in the code editor and console.log()
// a list of crew names and degrees in the following format: '[crew member's name]: [crew member's degree]',
// i.e.,'Lily: Computer Engineering'.

let spaceshipSeven = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

//Step 1
for (let crewMember in spaceshipSeven.crew) {
  console.log(`${crewMember}: ${spaceshipSeven.crew[crewMember].name}`);
}
//Step 2
for (let crewMember in spaceshipSeven.crew) {
  console.log(
    `${spaceshipSeven.crew[crewMember].name}: ${spaceshipSeven.crew[crewMember].degree}`
  );
}

// 1.
// Let’s create a new object to practice using this.
// In main.js there is an object robot, add a property of model and assign to it a value of '1E78V2'.
// Add another property, energyLevel and assign to it a value of 100.

// 2.
// Inside the robot object, add a method named provideInfo. Inside the body of provideInfo(), return the
// following string by using interpolation:

// I am MODEL and my current energy level is ENERGYLEVEL.

// Replace ‘MODEL’ and ‘ENERGYLEVEL’ with the calling object’s model and energyLevel property. Remember, to
// get the access to the calling object’s properties inside a method, you have to use the this keyword!

// 3.
// Now to check .provideInfo() has access to the internal properties of robot. Log the result of calling .provideInfo()
// method on robot to the console.

const robot = {
  //Step 1
  model: "1E78V2",
  energyLevel: 100,
  //Step 2
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};
//Step 3
console.log(robot.provideInfo());

//GETTERS

// 1.
// In robot, create a getter method named energyLevel using the get keyword. Leave function body blank for now.

// 2.
// Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator.
// If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of this._energyLevel.
// Make sure you return the string and not logging it to the console.

// 3.
// If this._energyLevel isn’t a number it could be that the _energyLevel property was altered. Let’s add a default return statement for when such a scenario arises.
// Add an else statement that returns 'System malfunction: cannot retrieve energy level'.

// 4.
// Log the result of calling the getter method energyLevel on robot to the console.
// Notice that the method will return a formatted response rather than just accessing a property!

const robotTwo = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return "My current energy level is " + this._energyLevel;
    } else {
      return "System malfunction: cannot retrieve energy level";
    }
  },
};

console.log(robotTwo.energyLevel);

//SETTERS

// 1.
// Currently, in robot there is a getter method for numOfSensors but no setter method! What if we need to add or remove some sensors? Let’s fix that problem.
// Add a setter method named numOfSensors using the set keyword. Provide a parameter of num. Leave the function body empty for now.

// 2.
// There are a couple of things we should do in the setter method:
// Add a check to see if num is a number using the typeof operator.
// num should also be greater than or equal to 0.
// If both conditions are met, reassign this._numOfSensors to num.

// 3.
// Now add an else that logs 'Pass in a number that is greater than or equal to 0' to the console.

// 4.
// Use the numOfSensors setter method on robot to assign _numOfSensors to 100.

// 5.
// To check that the setter method worked, console.log() robot.numOfSensors.

const robotThree = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  //Step 1
  set numOfSensors(num) {
    //Step 2
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
      //Step 3
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};

//Step 4
robotThree.numOfSensors = 100;
//Step 5
console.log(robotThree.numOfSensors);


// Factory Functions

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};
// In the monsterFactory function above, it has four parameters and returns an object that has the 
// properties: name, age, energySource, and scare(). To make an object that represents a specific monster like a ghost, 
// we can call monsterFactory with the necessary arguments and assign the return value to a variable:

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'
// Now we have a ghost object as a result of calling monsterFactory() with the needed arguments. 
// With monsterFactory in place, we don’t have to create an object literal every time we need a new monster. 
// Instead, we can invoke the monsterFactory function with the necessary arguments to make a monster for us!


// 1.
// Instead of making individual robots like we’ve been doing, let’s make a factory function to make robots as we please!

// Create a factory function named robotFactory that has two parameters model and mobile. 
// Make the function return an object. In the object, add a key of model with the value of the model parameter. 
// Add another property that has a key of mobile with a value of the mobile parameter.

// Then add a method named beep without a parameter that will log 'Beep Boop' to the console.

// 2.
// Use your factory function by declaring a const variable named tinCan. 
// Assign to tinCan the value of calling robotFactory with the first argument of 'P-500' and the second argument of true.

// 3.
// Let’s now check what tinCan can do! Call .beep() on tinCan.

// You should see 'Beep Boop' printed to the console which means the factory function 
// produced a robot object! Play around with tinCan to check the other properties!

//Step 1
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};

//Step 2
const tinCan = robotFactory('P-500', true);

//Step 3
tinCan.beep(); //'Beep Boop'


// 1.
// Use destructured assignment to create a const variable named functionality that extracts the functionality property of robot.

// If you need a reminder on how to use destructured assignment, review the example in the narrative or check the hint.

// 2.
// Since functionality is referencing robot.functionality we can call the methods available 
// to robot.functionality simply through functionality.

// Take advantage of this shortcut and call the .beep() method on functionality.

const robotFour = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
//Step 1
const { functionality } = robotFour;
//Step 2
functionality.beep();


// 1.
// In main.js there is an object, robot. We’d like to grab the property names, otherwise known as keys, 
// and save the keys in an array which is assigned to robotKeys. However, there’s something missing in the method call.

// 2.
// Object.entries() will also return an array, but the array will contain more arrays that have both the key 
// and value of the properties in an object.

// Declare a const variable named robotEntries and assign to it the entries of robot by calling Object.entries().

// 3.
// Now what if we want another object that has the properties of robot but with a few additional properties. 
// Object.assign() sounds like a great method to use, but like the previous examples we should check Object.assign() 
// documentation at MDN.

// Declare a const variable named newRobot. newRobot will be a new object that has all the properties of robot 
// and the properties in the following object: {laserBlaster: true, voiceRecognition: true}. Make sure that you are not 
// changing the robot object!

//Broke Code
      // const robot = {
      // 	model: 'SAL-1000',
      //   mobile: true,
      //   sentient: false,
      //   armor: 'Steel-plated',
      //   energyLevel: 75
      // };

      // const robotKeys = Object.keys();

      // console.log(robotKeys);

      // console.log(robotEntries);

      // console.log(newRobot);

//Corrected Code
const robotFive = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

//Step 1
const robotKeys = Object.keys(robotFive);

console.log(robotFiveKeys);

//Step 2
const robotEntries = Object.entries(robotFive);

console.log(robotFiveEntries);

//Step 3
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robotFive);

console.log(newRobot);


// 1.
// In app.js, create an empty menu object.

// 2.
// The menu object will hold the meal and price of Today’s Special as properties and they shouldn’t be altered directly.

// Within the menu object, create a _meal property with a value of an empty string (''). This will eventually hold the name of the meal.

// 3.
// Next, add a _price property with a value of 0. This will eventually hold the price of the meal, and should also not be altered directly.

// 4.
// We know properties that begin with _ should not be directly manipulated. But just to validate this knowledge, let’s test it out!

// Below the menu object, directly manipulate the two properties by assigning _meal a number value and _price a string value.

// Then, below the new assignments, console.log() the menu object to see how not type checking these values could cause confusion 
// for a website visitor!

// Add Setter Methods
// 5.
// To safely reassign the two menu properties, we can add setters that type check the values being assigned.

// Below the properties, use the set keyword to create a meal setter method with mealToCheck as a parameter. Leave the function body 
// empty for now.

// 6.
// In the body of the setter method, create an if statement that checks if mealToCheck is a string. If it is, return the object’s 
// _meal property with mealToCheck assigned as the value.

// 7.
// Utilizing the same procedures as above, use the set keyword to create a price setter with priceToCheck as a parameter. 
// This method should make sure the value associated with _price is always a number.

// 8.
// Below the menu object, set the values of _meal and _price using the newly created setter methods. Then, console.log() the menu 
// object to check their functionality.


// Add a Getter Method
// 9.
// Now it’s time to safely return the values of the _meal and _price properties in a readable form. Instead of directly accessing 
// the properties, we can use a getter method that proactively checks if a meal and price have been properly set, before returning the values.

// Below the setters, use the get keyword to create a todaysSpecial method. Leave the function body empty for now.

// 10.
// In the body of the getter, create an if…else statement to check if _meal and _price values exist (or are truthy values). If so, 
// return a string telling potential website visitors what Today’s Special is. For example: “Today’s Special is Spaghetti for $5!”

// If _meal and _price values do not exist (or are falsy) return the string 'Meal or price was not set correctly!'.

// 11.
// Finally, use the getter method to console.log() Today’s Special.


const menu = {
  _meal: "",
  _price: 0, 

  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    } else {
      console.log("Not a valid meal.");
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    } else {
      console.log("Not a valid price.");
    }
  },

  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  },
};

menu.meal = "Spaghetti";
menu.price = 5;

console.log(menu.todaysSpecial); // Output: Today's Special is Spaghetti for $5!


// Populating Data
// 1.
// Let’s make a data structure to store the information about our team. Declare a const variable called team and set it to 
// an empty object.

// 2.
// Our team has players and the games that they have played. Let’s represent both of these by adding two properties to your 
// team object. Add a _players property and a _games property and initialize both to empty arrays.

// 3.
// Next, populate the empty_players array with three players. Each player should be an object containing three 
// properties: firstName, lastName, and age. Put each player on a new line to prevent the line from getting too long.

// 4.
// Let’s do the same for our _games array. Populate the empty array with three games. Each game should be an object 
// containing three properties: opponent, teamPoints, opponentPoints.

// Getting Data
// 5.
// Create a getter method called players to retrieve the _players property. Inside the getter method, return 
// the _players property.

// For the scope of this project, we won’t need to create setter methods, because we don’t want anyone to change the data 
// saved to the properties.

// 6.
// Create another getter method called games to retrieve the _games property. Inside the getter method, return the _games property.

// Adding Data
// 7.
// We want to add a new player to our team. Add a .addPlayer() method to the team object. This method should take in 
// three parameters: newFirstName, newLastName, and newAge.

// Inside the method, create a player object by setting the three parameters to be the values for the object’s 
// three properties: firstName, lastName, age. Finally, add the player object to the team‘s _players array.

// 8.
// Below the team object, let’s try out our new .addPlayer() method to add a new player: Bugs Bunny, age 76.

// Log the team‘s _players property to check that our new player was added.

// 9.
// The scorekeeper has some new information for us! Create a method for adding game results called addGame that takes 
// three parameters: newOpponent, newTeamPoints, newOpponentPoints.

// Inside the .addGame() method, create a game object by setting the three parameters to be the values for the object’s 
// three properties: opponent, teamPoints, opponentPoints. Add the game object to the team‘s _games array.

// 10.
// Finally, below our team object, use the .addGame() method to add a record of a new game. Our team played against the 'Titans' 
// where we scored 100 points and the opponent scored 98 points.

// Log the team‘s _games property to check that our new game record was properly added.

const team = {
  //Step 2
  _players: [
    //Step 3
    {
      firstName: "Christian",
      lastName: "Blackwell",
      age: 26,
    },
    {
      firstName: "Noble",
      lastName: "Luther",
      age: 6,
    },
    {
      firstName: "Elise",
      lastName: "Phipps",
      age: 26,
    },
  ],
  _games: [
    //Step 4
    {
      opponent: "Fort Smith",
      teamPoints: 64,
      opponentPoints: 32,
    },
    {
      opponent: "Mansfield",
      teamPoints: 55,
      opponentPoints: 0,
    },
    {
      opponent: "Greenwood",
      teamPoints: 12,
      opponentPoints: 24,
    },
  ],

  //Step 5
  get players() {
    return this._players;
  },
  //Step 6
  get games() {
    return this._games;
  },
  //Step 7
  addPlayer(newFirstName, newLastName, newAge) {
    const newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge, 
    };
    this._players.push(newPlayer);
  },
  //Step 9
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const newGame = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(newGame);
  },
};

//Step 8
team.addPlayer("Bugs", "Bunny", 76);
//Step 10
team.addGame('Titans', 100, 98);
console.log(team._players, team._games);


