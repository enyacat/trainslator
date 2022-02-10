import './TextBox.css'
import TextToText from './TextToText.js'
import symbolObj from "./symbolObj"
import { useEffect } from 'react'
import TextToSpeech from './TextToSpeech.js'

export default function TextBox({ displayText, setDisplayText, translated, setTranslated, currentWord, setCurrentWord, targetLanguage, setTargetLanguage }) {

    console.log(displayText)
    console.log(translated)

    function handleChange(event) {
        var newWord = event.target.value
        setCurrentWord(newWord)
    }
    function handleClick() {
        console.log('adding input')
        var newarr = [...displayText, currentWord]
        setDisplayText(newarr)
        var newLanguage = targetLanguage
        if (newLanguage.includes("普通话") || newLanguage.includes("國語")) {
            newLanguage = "Google Chinese"
        } else if (newLanguage.includes("粤語")) {
            newLanguage = "Google Cantonese"
        }
        var languageSym = symbolObj[newLanguage]
        TextToText(currentWord, languageSym).then(res => setTranslated([...translated, res]))
    }

    useEffect(() => {
        TextToSpeech(translated[translated.length - 1], targetLanguage)
        console.log("it is here", translated)
    }, [translated])

    return (
        <div className='textbox-element'>
            <textarea value={currentWord} onChange={handleChange}>
            </textarea>
            <button onClick={handleClick}>Send</button>
        </div >
    )
}