import { useEffect } from 'react'
import symbolObj from './symbolObj.js'

export default function SelectTarget({ targetLanguage, setTargetLanguage }) {
    var voices = Object.keys(symbolObj)
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
        setTargetLanguage(newOption)
    }

    return (
        <select value={targetLanguage} onChange={handleChange}>
            <Options />
        </select>
    )
}