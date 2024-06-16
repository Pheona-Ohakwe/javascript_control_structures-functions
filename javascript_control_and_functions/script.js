// Exploring Conditional Statements and Loops
// Objective: The aim of this assignment is to familiarize students with conditional statements and loops in JavaScript and enhance their problem-solving skills using these control structures.

// Problem Statement: You are tasked with creating a JavaScript program that simulates a simple online shopping experience. The program should allow users to browse products, add them to a cart, and calculate the total cost of their purchase.

// Task 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart. This can be done with creating a simple variable that represents whether or not the user is logged in.
let userLoggedin = true
function checkLogin() {
    if (userLoggedin) {
      return true;
    }
    else
    return false;
}
console.log(userLoggedin)
// Task 2: Use a loop to display the list of available products to the user and add functionality for users to add products to their cart. You can hard code this out by just creating item variables or for EXTRA CREDIT figure out a way to grab user inputs using prompt(). 
const cart = ["eggs", "bread", "milk", "sugar"];


console.log("Available products:");
for (let i = 0; i < cart.length; i++) {
    console.log(`${i + 1}. ${cart[i]}`);
}

function addToCart(product) {
    cart.push(product);
    console.log(`${product} has been added to your cart.`);
}
console.log(addToCart('apples'))
console.log(cart)
    







// The aim of this assignment is to deepen students' understanding of functions in JavaScript and their various applications in solving programming problems.

// Problem Statement:
// Your task is to develop a JavaScript program that simulates a simple banking system. The program should include functions to perform basic banking operations such as deposit, withdrawal, and balance inquiry.

// Task 1: Create a function to handle deposits into a bank account.

// Task 2: Implement a function to handle withdrawals from a bank account, ensuring sufficient balance.
    
// Task 3: Develop a function to check the current balance of the account.
// Define a bank account object
let bankAccount = {
    balance: 1000, // Initial balance for demonstration
    transactions: [],

    // Function to deposit money into the account
    deposit: function(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transactions.push({ type: 'Deposit', amount: amount });
            console.log(`Successfully deposited $${amount}.`);
        } else {
            console.log('Invalid amount. Please enter a positive number.');
        }
    },

    // Function to withdraw money from the account
    withdraw: function(amount) {
        if (amount > 0) {
            if (this.balance >= amount) {
                this.balance -= amount;
                this.transactions.push({ type: 'Withdrawal', amount: amount });
                console.log(`Successfully withdrew $${amount}.`);
            } else {
                console.log('Insufficient balance. Withdrawal failed.');
            }
        } else {
            console.log('Invalid amount. Please enter a positive number.');
        }
    },

    // Function to check current balance
    checkBalance: function() {
        console.log(`Your current balance is $${this.balance}.`);
    },
// Expected Outcomes:

// After completing this assignment, students should demonstrate proficiency in creating and using functions to perform specific tasks.
// Students should understand the importance of function modularity and reusability in programming.
// This assignment will enable students to apply their knowledge of functions to practical scenarios, such as banking operations, thereby enhancing their problem-solving skills.