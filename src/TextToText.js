const axios = require('axios').default;

export default function TextToText(text, languageSym) {
    return axios({
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
            'to': languageSym
        },
        data: [{
            'text': text
        }],
        responseType: 'json'
    }).then(function (response) {
        return response.data[0].translations[0].text
    })
}
