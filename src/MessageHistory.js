import './MessageHistory.css'
import TextToText from './TextToText.js'
import { useEffect, useState } from 'react'



export default function MessageHistory(props) {
    var displayText = props.displayText
    console.log(displayText)
    const [translated, setTranslated] = useState([])
    const testing = () => {
        displayText.forEach(text => {
            TextToText(text).then(res => setTranslated(...translated, res))
        })
    }
    testing()
    console.log(translated)
    // useEffect(() => {
    //     testing()
    //     console.log(translated)
    // }, [displayText])
    // function Translations() {
    //     for (let i = 0; i < displayText.length - 1; i++) {
    //         return (
    //             <>
    //                 <p>
    //                     {displayText[i]}
    //                 </p>
    //                 <p>
    //                     {translated[i]}
    //                 </p>
    //             </>
    //         )
    //     }
    // }
    // console.log(newarr)
    return (
        <div className='message-history'>
            {/* <Translations /> */}
        </div>
    )
}
