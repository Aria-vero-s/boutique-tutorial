// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    let branding2 = document.getElementById('branding2');
    let website2 = document.getElementById('website2');
    let illustration2 = document.getElementById('illustration2');
    let fullpackage2 = document.getElementById('fullpackage2');

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("service") === "branding") {
                branding2.style.display = "inline";
                website2.style.display = "none";
                illustration2.style.display = "none";
                fullpackage2.style.display = "none";
            }
            if (this.getAttribute("service") === "website") {
                branding2.style.display = "none";
                website2.style.display = "inline";
                illustration2.style.display = "none";
                fullpackage2.style.display = "none";
            }
            if (this.getAttribute("service") === "illustration") {
                branding2.style.display = "none";
                website2.style.display = "none";
                illustration2.style.display = "inline";
                fullpackage2.style.display = "none";
            }
            if (this.getAttribute("service") === "fullpackage") {
                branding2.style.display = "none";
                website2.style.display = "none";
                illustration2.style.display = "none";
                fullpackage2.style.display = "inline";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    let bronze = document.getElementById('bronze');
    let silver = document.getElementById('silver');
    let gold = document.getElementById('gold');

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("package") === "branding2") {
                bronze.style.display = "inline";
                silver.style.display = "inline";
                gold.style.display = "inline";
            }
            if (this.getAttribute("package") === "website2") {
                bronze.style.display = "inline";
                silver.style.display = "inline";
                gold.style.display = "inline";
            }
            if (this.getAttribute("package") === "illustration2") {
                bronze.style.display = "inline";
                silver.style.display = "inline";
                gold.style.display = "inline";
            }
            if (this.getAttribute("package") === "fullpackage2") {
                bronze.style.display = "inline";
                silver.style.display = "inline";
                gold.style.display = "inline";
            }
        });
    }
});


// Extract user's checked checkboxes 


function brandingCheckbox(event) {
    var logo = document.getElementById("logo");
    var promo = document.getElementById("promo");
    var stationary = document.getElementById("stationary");
    var packaging = document.getElementById("packaging");

    if (document.getElementById('logo').checked){
        alert("logo checked") ;
    } else {
        alert("logo unchecked")
    }
    if (document.getElementById('promo').checked){
        alert("promo checked") ;
    } else {
        alert("promo unchecked")
    }
    if (document.getElementById('stationary').checked){
        alert("stationary checked") ;
    } else {
        alert("stationary unchecked")
    }
    if (document.getElementById('packaging').checked){
        alert("packaging checked") ;
    } else {
        alert("packaging unchecked")
    }

};

// function displayNext() {

//     document.getElementById("answer-box").value = "";
//     document.getElementById("answer-box").focus();

//     // Creates two random numbers between 1 and 25
//     let num1 = Math.floor(Math.random() * 25) + 1;
//     let num2 = Math.floor(Math.random() * 25) + 1;

//     if (gameType === "addition") {
//         displayNext(num1, num2);
//     }

// }

// function displayNext(operand1, operand2) {

//     document.getElementById('operand1').textContent = operand1;
//     document.getElementById('operand2').textContent = operand2;
//     document.getElementById('operator').textContent = "+";
    
// }


// /**
//  * The main game "loop", called when the script is first loaded
//  * and after the user's answer has been processed
//  */
// function runGame(gameType) {

//     document.getElementById("answer-box").value = "";
//     document.getElementById("answer-box").focus();

//     // Creates two random numbers between 1 and 25
//     let num1 = Math.floor(Math.random() * 25) + 1;
//     let num2 = Math.floor(Math.random() * 25) + 1;

//     if (gameType === "addition") {
//         displayAdditionQuestion(num1, num2);
//     } else if (gameType === "multiply") {
//         displayMultiplyQuestion(num1, num2);
//     } else if (gameType === "subtract" ) {
//         displaySubtractQuestion(num1, num2);
//     } else if (gameType === "division"){
// 	    displayDivisionQuestion(num1,num2);
//     } else {
//         alert(`Unknown game type: ${gameType}`);
//         throw `Unknown game type: ${gameType}. Aborting!`;
//     }

// }

// /**
//  * Checks the answer against the first element in
//  * the returned calculateCorrectAnswer array
//  */
// function checkAnswer() {

//     let userAnswer = parseInt(document.getElementById("answer-box").value);
//     let calculatedAnswer = calculateCorrectAnswer();
//     let isCorrect = userAnswer === calculatedAnswer[0];

//     if (isCorrect) {
//         alert("Hey! You got it right! :D");
//         incrementScore();
//     } else {
//         alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
//         incrementWrongAnswer();
//     }

//     runGame(calculatedAnswer[1]);

// }

// /**
//  * Gets the operands (the numbers) and the operator (plus, minus etc)
//  * directly from the dom, and returns the correct answer.
//  */
// function calculateCorrectAnswer() {

//     let operand1 = parseInt(document.getElementById('operand1').innerText);
//     let operand2 = parseInt(document.getElementById('operand2').innerText);
//     let operator = document.getElementById("operator").innerText;

//     if (operator === "+") {
//         return [operand1 + operand2, "addition"];
//     } else if (operator === "x") {
//         return [operand1 * operand2, "multiply"];
//     } else if (operator === "-") {
//         return [operand1 - operand2, "subtract"];
//     } else if (operator ==="/") {
// 		return [operand1 / operand2, "division"];
//     } else {
//         alert(`Unimplemented operator ${operator}`);
//         throw `Unimplemented operator ${operator}. Aborting!`;
//     }

// }

// /**
//  * Gets the current score from the DOM and increments it by 1
//  */
// function incrementScore() {

//     let oldScore = parseInt(document.getElementById("score").innerText);
//     document.getElementById("score").innerText = ++oldScore;

// }

// /**
//  * Gets the current tally of incorrect answers from the DOM and increments it by 1
//  */
// function incrementWrongAnswer() {

//     let oldScore = parseInt(document.getElementById("incorrect").innerText);
//     document.getElementById("incorrect").innerText = ++oldScore;
    
// }

// function displayAdditionQuestion(operand1, operand2) {

//     document.getElementById('operand1').textContent = operand1;
//     document.getElementById('operand2').textContent = operand2;
//     document.getElementById('operator').textContent = "+";
    
// }

// function displaySubtractQuestion(operand1, operand2) {

//     document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
//     document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
//     document.getElementById('operator').textContent = "-";

// }

// function displayMultiplyQuestion(operand1, operand2) {

//     document.getElementById('operand1').textContent = operand1;
//     document.getElementById('operand2').textContent = operand2;
//     document.getElementById('operator').textContent = "x";

// }

// // Add your division question here
// function displayDivisionQuestion(operand1, operand2) {
//     operand1 = operand1*operand2
// 	document.getElementById("operand1").textContent = operand1;
// 	document.getElementById("operand2").textContent = operand2;
// 	document.getElementById("operator").textContent = "/";

// }

// function refresh(){
//     window.location.reload("Refresh")
// }