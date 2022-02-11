export default function TextToSpeech(inputText, targetLanguage, isToggled) {
    var synth = window.speechSynthesis.getVoices();
    var voices = [];
    for (let i = 0; i < synth.length; i++) {
        if (synth[i].voiceURI.slice(0, 6) === "Google") {
            voices.push(synth[i])
        }
    }
    if (inputText !== '') {
        var utterThis = new SpeechSynthesisUtterance(inputText);
        utterThis.onend = function (event) {
            console.log('SpeechSynthesisUtterance.onend');
        }
        utterThis.onerror = function (event) {
            console.error('SpeechSynthesisUtterance.onerror');
        }
        console.log(voices)
        targetLanguage = "Google " + targetLanguage
        console.log(targetLanguage)
        if (targetLanguage === "Google Chinese") {
            utterThis.voice = voices.filter(voice => voice.name.includes("普通话"))[0]
        } else if (targetLanguage === "Google Cantonese") {
            utterThis.voice = voices.filter(voice => voice.name.includes("粤語"))[0]
            console.log("testing")
        } else {
            for (let i = 0; i < voices.length; i++) {
                if (voices[i].name === targetLanguage) {
                    utterThis.voice = voices[i]
                    break;
                }
            }
        }

    }
    if (isToggled) {
        window.speechSynthesis.speak(utterThis);
    }
}
