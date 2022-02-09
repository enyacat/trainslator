import './MessageHistory.css'
import TextToText from './TextToText.js'




export default function MessageHistory(props) {
    var displayText = props.displayText
    console.log(displayText[displayText.length - 1])
    var newarr = TextToText(displayText[displayText.length - 1]).then(res => { return res })
    console.log(newarr)
    return (
        <div className='message-history'>
            {displayText.map(text =>
                <>
                    <p>
                        {text}
                    </p>
                    <p>
                        { }
                    </p>
                </>
            )}
        </div>
    )
}