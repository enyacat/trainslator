import './SpeechToText.css'
import { getTokenOrRefresh } from './token_util';
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
import symObjSpeechToText from './symObjSpeechToText.js'
const speechsdk = require('microsoft-cognitiveservices-speech-sdk')


export default function SpeechToText({ setCurrentWord, originalLanguage }) {
    // async function - function will now complete everything simultaneously, HOWEVER one of the benefits of this is the await.
    async function speechToTalk(event) {
        var symbol = symObjSpeechToText[originalLanguage]
        // await - waits for a promise - if the certain promise is fulfilled, assign to tokenObject, and continue with the async function. 
        // Meaning the function after this await can proceed ONCE the promise return by getTokenOrRefresh has been fulfilled.
        // tokenObject - checks your key BY server side index.js and creates a json for src/token_util.js to obtain that object
        const tokenObject = await getTokenOrRefresh();
        const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObject.authToken, tokenObject.region);
        speechConfig.speechRecognitionLanguage = symbol;
        const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
        const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

        recognizer.recognizeOnceAsync(result => {

            if (result.reason === ResultReason.RecognizedSpeech) {
                setCurrentWord(result.privText.slice(0, -1))
            } else {
                console.error('no')
            }
        });
    }

    return (
        <div className='footer-element'>
            <button className="mic-image" onClick={() => speechToTalk()}></button>
        </div>
    )
}