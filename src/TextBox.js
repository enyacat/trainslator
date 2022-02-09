import './TextBox.css'

export default function TextBox({ displayText, setDisplayText }) {
    var lastText = displayText.slice(-1)
    function handleChange(event) {
        var newarr = [...displayText.slice(0, -1), event.target.value]
        setDisplayText(newarr)
        console.log(newarr)
    }
    return (
        <div className='textbox-element'>
            <textarea value={lastText} onChange={handleChange}>
            </textarea>
            <button></button>
        </div >
    )
}