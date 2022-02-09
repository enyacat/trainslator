import './TextBox.css'
import TextToText from './TextToText.js'

export default function TextBox({ displayText, setDisplayText, translated, setTranslated, currentWord, setCurrentWord}) {

    console.log(displayText)
    console.log(translated)
    function handleChange(event) {
        var newWord = event.target.value
        setCurrentWord(newWord)
        console.log(currentWord)
        event.target.value = newWord
    }
    function handleClick() {
            console.log('adding input')
            var newarr = [...displayText, currentWord]
            setDisplayText(newarr)
            console.log(displayText[displayText.length - 1])
            console.log(translated)

            TextToText(currentWord).then(res =>  setTranslated([...translated, res]) )
            console.log(translated)

    }

    return (
        <div className='textbox-element'>
            <textarea value={currentWord} onChange={handleChange}>
            </textarea>
            <button onClick={handleClick}></button>
        </div >
    )
}