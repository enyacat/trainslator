import './MessageHistory.css'

export default function MessageHistory({displayText, translated}) {

    const messages = () => {
        let textArray = []

        for(let i=0; i<displayText.length; i++) {
            textArray.push(
                <div className='text-gap'>
                    <div className='text-bubble-container'>
                        <div>
                            {displayText[i]}
                        </div>
                    </div>
                    <div className='translate-bubble-container'>
                        <div>
                            {translated[i]}
                        </div>
                    </div>
                </div>
            )
        }
        return textArray
    }
    return (
        <div className='message-history'>
            <div className='message-history-reverse'>
            {messages()}
            </div>
        </div>
    )
}