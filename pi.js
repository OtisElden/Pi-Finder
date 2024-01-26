//JS file for calculating out PI and finding specific numbers.

//Listener for form submission
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    gottaCalculateThemAll();
});

// Function for calculating
function gottaCalculateThemAll() {


    let valueToSearch = document.getElementById("inputField").value;

    let filteredNumbers = filterDemNumbers(valueToSearch);



    // Example usage
let piApproximation = estimatePi(10000000);  // 1 million iterations
console.log(piApproximation);

    // let piString = piCalculator(filteredNumbers); 

    // console.log(piString);

    




    document.getElementById("output").textContent = piString;
}




//Function to filter out everything but numbers
function filterDemNumbers(stringToFilter){

    return filteredString = stringToFilter.replace(/\D/g, "");
}


//Actual calculating function. Calculates out 100 digits of pi and returns them as a string.
function piCalculator(digits) {

    
}



function estimatePi(iterations) {
    let inside = 0;

    for (let i = 0; i < iterations; i++) {
        let x = Math.random() * 2 - 1;
        let y = Math.random() * 2 - 1;
        if (x * x + y * y < 1) {
            inside++;
        }
    }

    return (4 * inside) / iterations;
}





//Takes in piString and searches through the stirng for a specific set of numbers together. Returns the index position of those numbers
function piSearcher(piString, vlaueToBeSearched){

    //Working on layout

    //Decode string into workable values

    //Search through and check against the provided values, possibly for loop

    //Return index position of foudn value.

    //Have to work on what to do if multiple numbers are present. Like possibly placing them as their own chunk to evaluate? Like doing string.length as the iterator?


}


