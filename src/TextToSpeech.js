export default function TextToSpeech(inputText, targetLanguage) {
    var synth = window.speechSynthesis.getVoices();
    var voices = [];
    for (let i = 0; i < synth.length; i++) {
        if (synth[i].voiceURI.slice(0, 6) === "Google") {
            voices.push(synth[i])
        }
    }
    voices.sort(function (a, b) {
        const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
        if (aname < bname) return -1;
        else if (aname == bname) return 0;
        else return +1;
    });
    if (inputText !== '') {
        var utterThis = new SpeechSynthesisUtterance(inputText);
        utterThis.onend = function (event) {
            console.log('SpeechSynthesisUtterance.onend');
        }
        utterThis.onerror = function (event) {
            console.error('SpeechSynthesisUtterance.onerror');
        }

        var selectedOption = targetLanguage
        for (let i = 0; i < voices.length; i++) {
            if (voices[i].name == selectedOption) {
                utterThis.voice = voices[i]
                break;
            }
        }
        window.speechSynthesis.speak(utterThis);
    }
}
