const axios = require('axios').default;

export default function TextToText(result) {
    console.log('yes')
    console.log(result.text)
    axios({
        baseURL: "https://api.cognitive.microsofttranslator.com/",
        url: '/translate',
        method: 'post',
        headers: {
            'Ocp-Apim-Subscription-Key': process.env.REACT_APP_TRANSLATOR_KEY,
            'Ocp-Apim-Subscription-Region': process.env.REACT_APP_TRANSLATOR_REGION,
            'Content-type': 'application/json'
        },
        params: {
            'api-version': '3.0',
            'from': 'en',
            'to': ['zh-Hans', 'ko']
        },
        data: [{
            'text': `${result.text}`
        }],
        responseType: 'json' 
    }).then(function (response) {
        console.log(JSON.stringify(response.data, null, 4));
        console.log(JSON.stringify(response.data))
    })
}