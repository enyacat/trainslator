import symObjTextToSpeech from './symObjTextToSpeech.js'

export default function SelectOriginal({ originalLanguage, setOriginalLanguage }) {
    var voices = Object.keys(symObjTextToSpeech)
    function Options() {
        var Options = []
        for (let i = 0; i < voices.length; i++) {
            Options.push(
                <option key={i}>
                    {voices[i]}
                </option>
            )
        }
        return Options
    }

    function handleChange(event) {
        var newOption = event.target.value
        setOriginalLanguage(newOption)
    }

    return (
        <select value={originalLanguage} onChange={handleChange}>
            <Options />
        </select>
    )
}