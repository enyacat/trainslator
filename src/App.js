// import React, { Component } from 'react';
import SpeechToText from './SpeechToText.js'
import { useState } from 'react'
import './App.css';
import TextBox from './TextBox.js';
import MessageHistory from './MessageHistory.js'

// data we need
// 1. display text => speech to text output
// 2. output language 

// wireframe 
// 1. speech to text => string text in english 
// 2. textbox
//3. messageHistory <= array ["string 1 ", "string 2"] <= text to text 


function App() {
  var [displayText, setDisplayText] = useState(["hello", "hi"])
  var [translated, setTranslated] = useState(["안녕하세요", '안녕'])
  var [currentWord, setCurrentWord] = useState('')

  function setting() {
    var newarr = [...displayText, "state"]
    setDisplayText(newarr)
    console.log(newarr)
  }
  return (
    <div className="App">
      <header>
        <h1 onClick={setting} className='header'>Trainslator</h1>
      </header>
      <section>
        <MessageHistory displayText={displayText} />
      </section>
      <TextBox displayText={displayText} setDisplayText={setDisplayText} translated={translated} setTranslated={setTranslated} currentWord={currentWord} setCurrentWord={setCurrentWord}/>
      <SpeechToText displayText={displayText} setDisplayText={setDisplayText} currentWord={currentWord} setCurrentWord={setCurrentWord}/>
    </div>
  )
}

export default App;