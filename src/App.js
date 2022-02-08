// import React, { Component } from 'react';
import SpeechToText from './SpeechToText.js'
import { useState } from 'react'
import './App.css';
import TextBox from './TextBox.js';
import MessageHistory from './MessageHistory.js'


console.log(process.env.REACT_APP_TRANSLATOR_KEY)
console.log(process.env.REACT_APP_SPEECH_KEY)

function App() {
    let [speech, setSpeech] = useState([])
    console.log(speech)
    return (
        <div className="App">
            <header>
              <h1 className='header'>Trainslator</h1>
            </header>
            <section>
              <MessageHistory/>
            </section>
            <TextBox/>
            <SpeechToText setSpeech={setSpeech} speech={speech}/>
        </div>
    )
}

export default App;