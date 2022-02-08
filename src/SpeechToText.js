import './SpeechToText.css'
import TextToText from './TextToText.js'
import { getTokenOrRefresh } from './token_util';
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
const speechsdk = require('microsoft-cognitiveservices-speech-sdk')



export default function SpeechToText(props) {
    let speechs = props.speech
    console.log(speechs)
    props.setSpeech('ye')
    console.log(props.speech)
    // async function - function will now complete everything simultaneously, HOWEVER one of the benefits of this is the await.
    async function speechToTalk() {
        // await - waits for a promise - if the certain promise is fulfilled, assign to tokenObject, and continue with the async function. 
        // Meaning the function after this await can proceed ONCE the promise return by getTokenOrRefresh has been fulfilled.
        // tokenObject - checks your key BY server side index.js and creates a json for src/token_util.js to obtain that object
        console.log('yes')
        const tokenObject = await getTokenOrRefresh();
        const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObject.authToken, tokenObject.region);
        speechConfig.speechRecognitionLanguage = 'en-US';
        const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
        const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);
    
        recognizer.recognizeOnceAsync(result => {

            if (result.reason === ResultReason.RecognizedSpeech) {
                TextToText(result)
            } else {
                console.error('ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.');
            }
        });
    }

    return (
        <div className='footer-element'>
            <button className="mic-image" onClick={() => speechToTalk()}>click</button>
        </div>
    )
}