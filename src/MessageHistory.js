import './MessageHistory.css'
// import TextToText from './TextToText.js'
// import { useEffect, useState } from 'react'



export default function MessageHistory(props) {
    // var displayText = props.displayText

    // const [translated, setTranslated] = useState([])
    // const testing = () => {
    //     const translatedarr = []
    //     displayText.forEach(text => {
    //     TextToText(text).then(res => { setTranslated([...translatedarr,res]) })
    //     console.log(translated)
    // })
    // }
    
    // useEffect(() => {
    //     testing()
    // }, [displayText])

    return (
        <div className='message-history'>
            {/* {displayText.map((text, idx) =>
                <>
                    <p>
                        {text}
                    </p>
                    <p>
                        {translated}
                    </p>
                </>
            )} */}
        </div>
    )
}