import { useEffect } from 'react'

export default function Select({ targetLanguage, setTargetLanguage }) {
    var synth = window.speechSynthesis.getVoices()
    var voices = []

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

    function Options() {
        var Options = []
        for (let i = 0; i < voices.length; i++) {
            Options.push(
                <option key={i}>
                    {voices[i].name}
                </option>
            )
        }
        return Options
    }

    function handleChange(event) {
        var newOption = event.target.value
        setTargetLanguage(newOption)
    }
    
    return (
        <select value={targetLanguage} onChange={handleChange}>
            <Options />
        </select>
    )
}