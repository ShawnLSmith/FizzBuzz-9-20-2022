//Function getValues
//Get values from the user, for this app we need to get the fizz and the buzz value.
function getValues(){

    //Get the user values from the DOM or page.
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //Check(Parse) for numbers.
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //Check that the numbers are integers.
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) ) {

    //We call FizzBuzz.
    let fbArray = fizzBuzz(fizzValue,buzzValue);

    //Display collected data.
    displayData(fbArray);

    //Call displayData and writie the values to the screen.
    } else{
        alert("You must enter an integer")
    }
    
}
//Function FizzBuzz
//Do Fizz Buzz
function fizzBuzz(fizzValue, buzzValue){

    //Initialize the returnArray.
    let returnArray = [];

    //Loop from 1 to 100.
    for (let i = 1; i <= 100; i++){

        //We need to check the current value in three steps.
        //check to see if divisible by both (3 and 5).
        //if so push 'FizzBuzz into an array and not the number.
        //Check to see if divisible by fizz value (3).
        //if so push 'Fizz' into an array and not the number.
        //Check to see if divisible byy buzz value (5).
        //If so push 'Buzz' into an array and not the number.
        //If none of them,push the number into the array.    

        if (i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push('FizzBuzz')
        }else if (i % fizzValue == 0){
            returnArray.push('Fizz');            
        }else if (i % buzzValue == 0){
            returnArray.push('Buzz');
        }else{
            returnArray.push(i);       
        }        
    }  

    return returnArray;
}
//Function displayData
//Loop over the array and create a tablerow for each item.
function displayData(fbArray){    

    //Get the table body element from the page.
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //Clear the table first.
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index += 5) {

        //importNode, new!! 9/23/2022
        let tableRow = document.importNode(templateRow.content, true);

        //Grab row tds from "Template Section" and put them into the array 
        let rowCols = tableRow.querySelectorAll("td");  

        //Array Sets
        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index+1];

        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index+2];

        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index+3];

        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index+4];       
        
        tableBody.appendChild(tableRow);
    }

    //Add all the rows to the table.

}