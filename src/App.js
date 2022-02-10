// import React, { Component } from 'react';
import SpeechToText from './SpeechToText.js'
import { useState } from 'react'
import './App.css';
import TextBox from './TextBox.js';
import MessageHistory from './MessageHistory.js'
import Select from "./Select.js"

function App() {
  var [displayText, setDisplayText] = useState([])
  var [translated, setTranslated] = useState([])
  var [currentWord, setCurrentWord] = useState('')
  var [targetLanguage, setTargetLanguage] = useState("Google Bahasa Indonesia")


  return (
    <div className="App">
      <header>
        <h1 className='header'>Trainslator</h1>
        <Select targetLanguage={targetLanguage} setTargetLanguage={setTargetLanguage} />
      </header>
      <section>
        <MessageHistory displayText={displayText} translated={translated} />
      </section>
      <TextBox displayText={displayText} setDisplayText={setDisplayText} translated={translated} setTranslated={setTranslated} currentWord={currentWord} setCurrentWord={setCurrentWord} targetLanguage={targetLanguage} setTargetLanguage={setTargetLanguage} />
      <SpeechToText displayText={displayText} setDisplayText={setDisplayText} currentWord={currentWord} setCurrentWord={setCurrentWord} />
    </div>
  )
}

export default App;