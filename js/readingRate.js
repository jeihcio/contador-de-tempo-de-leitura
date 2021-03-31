class ReadingRate {

    constructor() {
        this.WORDS_FOR_MINUTES = 150;
    }

    removeDuplicatesSpaces(text) {
        return text.replace(/\s+/g, ' ');
    }

    calculateWords(text) {
        let result = this.removeDuplicatesSpaces(text);
        return result.split(" ").length;
    }

    calculateChars(text) {
        return text.length;
    }

    calculateInSeconds(textareaID) {
        let text = "",
            wordCount = "";

        let secondsForMinutes = 60,
            wordsForMinutes = this.WORDS_FOR_MINUTES,
            readingRateInSeconds = 0;

        text = document.getElementById(textareaID).value;
        wordCount = this.calculateWords(text);

        readingRateInSeconds = (wordCount * secondsForMinutes) / wordsForMinutes;
        return readingRateInSeconds;
    }

    secondsToHms(secondsInput) {
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

    calculateTime(textareaID, resultID) {
        let seconds = this.calculateInSeconds(textareaID);
        let result = this.secondsToHms(seconds);

        document.getElementById(resultID).innerHTML = "<b>Tempo estimado</b>: " + result;
    }
}