import './TextBox.css'
import TextToText from './TextToText.js'
import symObjTextToSpeech from "./symObjTextToSpeech.js"
import { useEffect } from 'react'
import TextToSpeech from './TextToSpeech.js'

export default function TextBox({ displayText, setDisplayText, translated, setTranslated, currentWord, setCurrentWord, targetLanguage, originalLangauge, isToggled }) {

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
        var targetSym = symObjTextToSpeech[targetLanguage]
        var originalSym = symObjTextToSpeech[originalLangauge]
        TextToText(currentWord, targetSym, originalSym).then(res => setTranslated([...translated, res]))
    }

    useEffect(() => {
        TextToSpeech(translated[translated.length - 1], targetLanguage, isToggled)
    }, [translated])

    return (
        <div className='textbox-element'>
            <textarea value={currentWord} onChange={handleChange}>
            </textarea>
            <button onClick={handleClick}>Send</button>
        </div >
    )
}