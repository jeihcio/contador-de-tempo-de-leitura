function removeDuplicatesSpaces(text) {
    return text.replace(/\s+/g, ' ');
}

function calculateInSeconds(textareaID) {
    let text = "",
        wordCount = "";

    let secondsForMinutes = 60,
        wordsForMinutes = 150,
        readingRateInSeconds = 0;

    text = document.getElementById(textareaID).value;
    text = removeDuplicatesSpaces(text);
    wordCount = text.split(" ").length;

    readingRateInSeconds = (wordCount * secondsForMinutes) / wordsForMinutes;
    return readingRateInSeconds;
}

function secondsToHms(secondsInput) {
    secondsInput = Number(secondsInput);

    let hours = Math.floor(secondsInput / 3600),
        minutes = Math.floor(secondsInput % 3600 / 60),
        seconds = Math.floor(secondsInput % 3600 % 60);

    let hDisplay = hours > 0 ? hours + (hours == 1 ? " hora, " : " horas, ") : "",
        mDisplay = minutes > 0 ? minutes + (minutes == 1 ? " minuto, " : " minutos, ") : "",
        sDisplay = seconds > 0 ? seconds + (seconds == 1 ? " segundos" : " segundos") : "";

    let result = hDisplay + mDisplay + sDisplay;

    return result.trim();
}

function calculate(textareaID, resultID) {
    let seconds = calculateInSeconds(textareaID);
    let result = secondsToHms(seconds);

    document.getElementById(resultID).innerHTML = "<b>Tempo estimado</b>: " + result;
}