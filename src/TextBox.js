import './TextBox.css'
import TextToText from './TextToText.js'

export default function TextBox({ displayText, setDisplayText, translated, setTranslated }) {
    var lastText = displayText.slice(-1) // "" => ["hello", "test", ""]
    console.log(displayText)
    console.log(translated)
    function handleChange(event) {
        var newarr = [...displayText.slice(0, -1), event.target.value]
        setDisplayText(newarr)
    }
    function handleClick() {
        if (lastText === '') {
            console.log(displayText)
            console.log(translated)
        } else {
            console.log('adding input')
            var newarr = [...displayText, ""]
            setDisplayText(newarr)
            console.log(displayText[displayText.length - 1])
            console.log(translated)

            let lastDisplayText = displayText[displayText.length - 1]
            TextToText(lastDisplayText).then(res =>  setTranslated([...translated, res]) )
            console.log(translated)
        }
    }
    return (
        <div className='textbox-element'>
            <textarea value={lastText} onChange={handleChange}>
            </textarea>
            <button onClick={handleClick}></button>
        </div >
    )
}