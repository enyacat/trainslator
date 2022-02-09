const axios = require('axios').default;

export default function TextToText(text) {
    // console.log(text)
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
            'to': ['ko']
        },
        data: [{
            'text': `${text}`
        }],
        responseType: 'json'
    }).then(function (response) {
        // console.log(JSON.stringify(response.data[0].translations[0].text))
        console.log(JSON.stringify(response.data[0].translations[0].text))
        return JSON.stringify(response.data[0].translations[0].text)

    })
}
