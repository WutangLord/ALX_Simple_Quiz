// Function to check the user's answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Get the feedback element
        const feedbackElement = document.getElementById("feedback");

        // Compare userAnswer with correctAnswer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green"; // Optional: Style the feedback
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red"; // Optional: Style the feedback
        }
    } else {
        // If no option is selected, prompt the user to choose an answer
        alert("Please select an answer before submitting.");
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
