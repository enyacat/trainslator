import './TextBox.css'

export default function TextBox({ displayText, setDisplayText }) {
    var lastText = displayText.slice(-1) // "" => ["hello", "test", ""]
    function handleChange(event) {
        var newarr = [...displayText.slice(0, -1), event.target.value]
        setDisplayText(newarr)
    }
    function handleClick() {
        if (lastText === "") {
            console.log(displayText)
        } else {
            var newarr = [...displayText, ""]
            setDisplayText(newarr)
            console.log(displayText)
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