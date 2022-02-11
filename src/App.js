// import React, { Component } from 'react';
import SpeechToText from './SpeechToText.js'
import { useState } from 'react'
import './App.css';
import TextBox from './TextBox.js';
import MessageHistory from './MessageHistory.js'
import SelectLanguage from "./SelectLanguage.js"
import Toggle from './Toggle.js';
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
  var [originalLanguage, setOriginalLanguage] = useState("US English")
  var [targetLanguage, setTargetLanguage] = useState("한국의")
  var [isToggled, setIsToggled] = useState(false)

  return (
    <div className="App">

      <div className='container'>
        <header>
          <h1 className='header'>Trainslator</h1>
        </header>
        <section className='message-container'>
          <MessageHistory displayText={displayText} translated={translated} />
        </section>
        <TextBox displayText={displayText} setDisplayText={setDisplayText} translated={translated} setTranslated={setTranslated} currentWord={currentWord} setCurrentWord={setCurrentWord} targetLanguage={targetLanguage} originalLanguage={originalLanguage} isToggled={isToggled} />
        <div className='selection-grid'>
          <SelectLanguage Language={originalLanguage} setLanguage={setOriginalLanguage} divClass="'select-header'" selectClass='select-element' />
          <div className='arrow right'></div>
          <SelectLanguage Language={targetLanguage} setLanguage={setTargetLanguage} divClass="'target-header'" selectClass='target-element' />
        </div>
        <SpeechToText setCurrentWord={setCurrentWord} originalLanguage={originalLanguage} />
        <Toggle isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
      </div>
    </div>
  )
}

export default App;