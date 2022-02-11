import symObjTextToSpeech from './symObjTextToSpeech.js'
import './SelectLanguage.css'

export default function SelectLanguage({ Language, setLanguage, divClass, selectClass }) {
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
        setLanguage(newOption)
    }

    return (
        <div>
            <div className={divClass}></div>
            <select className={selectClass} value={Language} onChange={handleChange}>
                <Options />
            </select>
        </div>
    )
}