function isEnglishText(text) {
    const englishRegex = /^[A-Za-z0-9\s.,!?'"()]+$/;
    return englishRegex.test(text);
}

function analyzeSentiment() {
    const sentence = document.getElementById('sentenceInput').value;
    const result = document.getElementById('sentimentResult');
    const image = document.getElementById('sentimentImage');
    const errorMessage = document.getElementById('error-message');

    if (sentence.trim() === "") {
        clearAnalysis();
        return;
    }

    if (!isEnglishText(sentence)) {
        result.textContent = "N/A";
        image.style.display = "none";
        errorMessage.style.display = "block";
        return;
    }

    errorMessage.style.display = "none";

    let sentiment = "Neutral";
    let imgSrc = "";

    if (sentence.includes("good") || sentence.includes("great") || sentence.includes("happy")) {
        sentiment = "Positive";
        result.style.color = "#4CAF50";
        imgSrc = "positive.png";
    } else if (sentence.includes("bad") || sentence.includes("sad") || sentence.includes("angry")) {
        sentiment = "Negative";
        result.style.color = "#f44336";
        imgSrc = "negative.png";
    } else {
        sentiment = "Neutral";
        result.style.color = "#ff9800";
        imgSrc = "neutral.png";
    }

    result.textContent = sentiment;
    image.src = imgSrc;
    image.style.display = "block";
}

function clearAnalysis() {
    const result = document.getElementById('sentimentResult');
    const image = document.getElementById('sentimentImage');
    const errorMessage = document.getElementById('error-message');

    result.textContent = "N/A";
    result.style.color = "#4CAF50";
    image.style.display = "none";
    image.src = "";
    errorMessage.style.display = "none";
}

document.getElementById('sentenceInput').addEventListener('input', function () {
    const sentence = document.getElementById('sentenceInput').value.trim();

    if (sentence === "") {
        clearAnalysis();
    }
});
