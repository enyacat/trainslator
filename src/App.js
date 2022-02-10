// import React, { Component } from 'react';
import SpeechToText from './SpeechToText.js'
import { useState } from 'react'
import './App.css';
import TextBox from './TextBox.js';
import MessageHistory from './MessageHistory.js'
import SelectTarget from "./SelectTarget.js"
import SelectOriginal from "./SelectOriginal.js"
// data we need
// 1. display text => speech to text output
// 2. output language 

// wireframe 
// 1. speech to text => string text in english 
// 2. textbox
//3. messageHistory <= array ["string 1 ", "string 2"] <= text to text 


function App() {
  var [displayText, setDisplayText] = useState([])
  var [translated, setTranslated] = useState([])
  var [currentWord, setCurrentWord] = useState('')
  var [originalLanguage, setOriginalLanguage] = useState("Google US English")
  var [targetLanguage, setTargetLanguage] = useState("Google 한국의")

  return (
    <div className="App">

      <div className='container'>
        <header>
          <h1 className='header'>Trainslator</h1>
        </header>
        <section className='message-container'>
          <MessageHistory displayText={displayText} translated={translated} />
        </section>
        <TextBox displayText={displayText} setDisplayText={setDisplayText} translated={translated} setTranslated={setTranslated} currentWord={currentWord} setCurrentWord={setCurrentWord} targetLanguage={targetLanguage} originalLanguage={originalLanguage} />
        <div className='selection-grid'>
          <SelectOriginal originalLanguage={originalLanguage} setOriginalLanguage={setOriginalLanguage} />
          <div className='arrow right'></div>
          <SelectTarget targetLanguage={targetLanguage} setTargetLanguage={setTargetLanguage} />
        </div>
        <SpeechToText displayText={displayText} setDisplayText={setDisplayText} currentWord={currentWord} setCurrentWord={setCurrentWord} originalLanguage={originalLanguage} />
      </div>
    </div>
  )
}

export default App;