// Step 1: Define the function
function checkAnswer() {
    // Step 2: Define the correct answer
    const correctAnswer = "4";

    // Step 3: Get user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Step 4: Check if user selected an option
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 5: Compare and display feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 6: Attach event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
