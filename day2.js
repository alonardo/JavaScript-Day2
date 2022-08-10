//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function display(my_dict) {
    for (const [key, value] of Object.entries(my_dict)) {
        if (typeof key === 'string') {
            console.log(key)
            if (typeof value == 'string'){
                console.log(value)
            }
            if (typeof value == 'object'){
                if (typeof value[0] == 'object'){
                    for (const [keyB, valueB] of Object.entries(value[0])) {
                        console.log(keyB)
                        console.log(valueB)
                    }
                }
            }
        }
    }
}

// display(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
// Create our Person Prototype

const Person = function(name_, age) {
    this.name = name_
    this.age = age
    this.printInfo = () => {console.log(`This is ${this.name} and they are ${this.age} years old.`)}
    this.addOneYear = (num) => {this.age += num}
}

const andre = new Person('Andre', 30)
// andre.printInfo()
// andre.addOneYear(3)
// andre.printInfo()

const jessa = new Person('Jessa', 50)
// jessa.printInfo()
// jessa.addOneYear(-20)
// jessa.printInfo()


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if its length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength (str) {
    return new Promise((resolve, reject)=>{
    str.length > 10 ? resolve('Big word') : reject('Small number')
    })
    .then( (result)=> console.log(result))
    .catch( (error)=> console.log(error))    
}

checkStringLength('thisShouldPrintBigWord')

