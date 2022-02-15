## **TRAINSLATOR - A React translator app**
A link to the app: https://trainslator2022.herokuapp.com/
This sample shows how to integrate the Azure Speech service, translator and Web Speech API into a A React translator app. This app allows user to set recognition language and target language, captures audio from a microphone, editing the text before translating into the target language in text and audio.

## **Wireframes**

Here’s a simple diagram of the planning of our single page app [https://excalidraw.com/#room=0033d610261027abdef8,TLgiZOsG87e9iAF40wBpuQ](https://excalidraw.com/#room=0033d610261027abdef8,TLgiZOsG87e9iAF40wBpuQ).

## **General approch**

1. The work was first divided into three parts and the APIs were selected: 
- speech to text: Azure Speech service
- text translation: Azure translator
- text to speech: Web Speech API
2. Day 1 afternoon: The text translation code was integrated into the speech to text React sample code both taken from the Azure website (”**[enyacat](https://github.com/enyacat)”**).
3. Day 2: Group discussing more planning. “**[HarryPdot](https://github.com/HarryPdot)**” refactored the code into React components.
4. Day 3: Group solving the “input text not editable” problem. “**[HarryPdot](https://github.com/HarryPdot)”** solved the async problem and  can display the latest original and translated content. “**[enyacat](https://github.com/enyacat)”** couldn’t get Azure text to speech API to work and turned to the Web Speech API but having issues with the async and the module starting time.
5. Day 4: “**[epoch](https://gist.github.com/epoch)”** helped with the async problem in text to speech. **“[brendonwang9](https://github.com/brendonwang9)”** refactored the code into React components, made the target and recognition language selection lists working. Group conquered the hurdle of integrating the language codes of Azure and the Web Speech APIs. “**[HarryPdot](https://github.com/HarryPdot)**” did CSS arranging each elements in place.
6. Day 5: “[enyacat](https://github.com/enyacat)” got the toggle for sound function in, “[HarryPdot](https://github.com/HarryPdot)” arranged the toggle picture, and “[brendonwang9](https://github.com/brendonwang9)” changed the language display.

## **Prerequisites**

1. You’ll need to have an Azure account and Speech service subscription. You’ll need to create API key for both the Speech service and the translator, the translator key had the global region during the development.
2. Ensure you have [Node.js] (https://nodejs.org/en/download/) installed.

## **How to run the app**

1. Clone this repo, then change directory to the project root and run `npm install` to install dependencies.
2. Create a .env file under the root directory, having the following content, and replace the placeholder text with your API keys.:

```jsx
REACT_APP_SPEECH_KEY=your_Azure_speech_key
REACT_APP_SPEECH_REGION=your_Azure_speech_region
REACT_APP_TRANSLATOR_KEY=your_Azure_translator_key
REACT_APP_TRANSLATOR_REGION=global
```

3. To run the Express server and React app together, run `npm run dev`.