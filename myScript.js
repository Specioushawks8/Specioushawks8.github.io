
//Precondtion: we pressed the button
//postCondition: Displays a random message from an array of strings
function myFunction( ) {
    //declare variables
    let min = 0; 
    let max = 4;
    let sentence0 = "you are worth it!"; 
    let sentence1 = "Machine learning is awesome"; 
    let sentence2 = "This is a random message lol"; 
    let sentence3 = "Calculus is awesome!"; 
    let sentence4 = "I like pizza!"; 
    

    let myNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const myArray = [ sentence0, sentence1, sentence2, sentence3, sentence4]; 

    alert(myArray[myNumber]);
}
