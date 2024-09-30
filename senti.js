// // Function to analyze sentiment
// function analyzeSentiment() {
//     // Get the sentence input
//     const sentence = document.getElementById('sentenceInput').value;
    
//     // Simple mock logic for sentiment analysis (replace with real logic or API)
//     let sentiment = "Neutral"; // Default value
    
//     if (sentence.includes("good") || sentence.includes("great") || sentence.includes("happy")) {
//         sentiment = "Positive";
//         document.getElementById('sentimentResult').style.color = "#4CAF50";
//     } else if (sentence.includes("bad") || sentence.includes("sad") || sentence.includes("angry")) {
//         sentiment = "Negative";
//         document.getElementById('sentimentResult').style.color = "#f44336";
//     } else {
//         sentiment = "Neutral";
//         document.getElementById('sentimentResult').style.color = "#ff9800";
//     }

//     // Display the sentiment result
//     document.getElementById('sentimentResult').textContent = sentiment;
// }













// Function to check if the text contains only English letters
function isEnglishText(text) {
    const englishRegex = /^[A-Za-z0-9\s.,!?'"()]+$/;
    return englishRegex.test(text);
}

// Function to analyze sentiment
function analyzeSentiment() {
    const sentence = document.getElementById('sentenceInput').value;
    const result = document.getElementById('sentimentResult');
    const image = document.getElementById('sentimentImage');
    const errorMessage = document.getElementById('error-message');

    // Check if input is cleared
    if (sentence.trim() === "") {
        clearAnalysis(); // Clear the sentiment analysis
        return;
    }

    // Check if input is in English
    if (!isEnglishText(sentence)) {
        result.textContent = "N/A";
        image.style.display = "none";
        errorMessage.style.display = "block"; // Show error message
        return;
    }

    // Hide error message if text is valid
    errorMessage.style.display = "none";

    let sentiment = "Neutral"; // Default sentiment
    let imgSrc = ""; // Default image source

    // Simple sentiment logic based on keywords
    if (sentence.includes("good") || sentence.includes("great") || sentence.includes("happy")) {
        sentiment = "Positive";
        result.style.color = "#4CAF50";
        imgSrc = "positive.png"; // Path to positive emoji image
    } else if (sentence.includes("bad") || sentence.includes("sad") || sentence.includes("angry")) {
        sentiment = "Negative";
        result.style.color = "#f44336";
        imgSrc = "negative.png"; // Path to negative emoji image
    } else {
        sentiment = "Neutral";
        result.style.color = "#ff9800";
        imgSrc = "neutral.png"; // Path to neutral emoji image
    }

    // Update sentiment result and image
    result.textContent = sentiment;
    image.src = imgSrc;
    image.style.display = "block";
}

// Function to clear sentiment analysis
function clearAnalysis() {
    const result = document.getElementById('sentimentResult');
    const image = document.getElementById('sentimentImage');
    const errorMessage = document.getElementById('error-message');

    // Reset the result, hide the image and error message
    result.textContent = "N/A";
    result.style.color = "#000"; // Reset color to default
    image.style.display = "none";
    image.src = "";
    errorMessage.style.display = "none";
}

// Event listener to reset sentiment when input is cleared
document.getElementById('sentenceInput').addEventListener('input', function () {
    const sentence = document.getElementById('sentenceInput').value.trim();

    if (sentence === "") {
        clearAnalysis(); // Clear analysis if input is empty
    }
});
