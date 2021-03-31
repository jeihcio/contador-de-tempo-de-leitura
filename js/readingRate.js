function removeDuplicatesSpaces(text) {
    return text.replace(/\s+/g, ' ');
}

function calculateInSeconds(textareaID) {
    let text = "",
        wordCount = "";

    let secondsForMinutes = 60,
        wordsForMinutes = 200,
        readingRateInSeconds = 0;

    text = document.getElementById(textareaID).value;
    text = removeDuplicatesSpaces(text);
    wordCount = text.split(" ").length;

    readingRateInSeconds = (wordCount * secondsForMinutes) / wordsForMinutes;
    return readingRateInSeconds;
}

function calculate(textareaID) {
    let seconds = calculateInSeconds(textareaID);

    alert(seconds);
}