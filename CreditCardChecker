// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:

//Step 3
function validateCred(array) {
  let sum = 0; // Creates a variable sum and initializes it to 0. This variable will store the sum of the digits after applying the Luhn algorithm.

  // Initiates a loop to iterate over each digit in the array, starting from the rightmost digit.
  for (let i = array.length - 1; i >= 0; i--) {
    let currentDigit = array[i];

    // The code inside the loop checks if the current digit's position (from the right) is odd using (array.length - 1 - i) % 2 === 1.
    // If it is, it doubles the current digit and, if the result is greater than 9, subtracts 9.
    if ((array.length - 1 - i) % 2 === 1) {
      currentDigit *= 2;
      if (currentDigit > 9) {
        currentDigit -= 9;
      }
    }
    // Adds the current digit (either doubled or as is) to the sum.
    sum += currentDigit;
  }
  // Checks if the sum is divisible by 10 with no remainder. If it is, the credit card number is valid according to the Luhn algorithm.
  return sum % 10 === 0;
}

// Test Function:
console.log(validateCred(valid1)); // Should print true
console.log(validateCred(invalid1)); // Should print false

// Step 4
function findInvalidCards(cards) {
  const invalid = []; // Creates an empty array named invalid. This array will store all the invalid credit card numbers.

  // Initiates a loop to iterate over each card number in the cards array.
  for (let i = 0; i < cards.length; i++) {
    // Assigns the current card number in the iteration to the variable currCred.
    let currCred = cards[i];
    // Checks if the current card (currCred) is invalid. The validateCred function is called here, and if it returns false (meaning the card is invalid), the if condition is satisfied.
    if (!validateCred(currCred)) {
      // Adds the invalid card number to the invalid array if the card fails the validation check.
      invalid.push(currCred);
    }
  }
  // Returns the array containing all the invalid card numbers identified in the cards array.
  return invalid;
}

// Test function:
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5])); // Shouldn't print anything
console.log(
  findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])
); // Should print all of the numbers

console.log(findInvalidCards(batch)); // Test what the mystery numbers are

// Step 5
function idInvalidCardCompanies(invalidBatch) {
  const companies = []; // Initializes an empty array companies to store the names of companies.

  // Initiates a loop to iterate through each invalid credit card number in the invalidBatch array.
  for (let i = 0; i < invalidBatch.length; i++) {
    //Checks the first digit of the current invalid credit card number.
    switch (invalidBatch[i][0]) {
      // For each case (credit card company), it checks if the company is already in the companies array using indexOf. If not, it adds the company to the array using push.
      case 3:
        if (companies.indexOf("Amex") === -1) {
          companies.push("Amex");
        }
        break;
      case 4:
        if (companies.indexOf("Visa") === -1) {
          companies.push("Visa");
        }
        break;
      case 5:
        if (companies.indexOf("Mastercard") === -1) {
          companies.push("Mastercard");
        }
        break;
      case 6:
        if (companies.indexOf("Discover") === -1) {
          companies.push("Discover");
        }
        break;
      // default: is used for any other case (company not found). It logs a message to the console.
      default:
        console.log("Company not found.");
    }
  }
  // Returns the array containing the names of companies that issued the invalid cards.
  return companies;
}

console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards
