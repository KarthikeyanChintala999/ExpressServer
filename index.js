const fetch = require('node-fetch');
const express = require('express');
const app = express();
const PORT = 8080;

const apiKey = "";
const apiEndPoint = 'https://api.openai.com/v1/completions';

app.get('/some-link',(request,response)=>{
    const prompt = request.body.prompt // assuming prompt is given request body
});

app.use(express.json());

fetch(apiEndPoint,{
    method:'POST',
    headers :{
        'Content-type':'application/json',
        'Authorization':`Bearer.${apiKey}`,
    },
    body: JSON.stringify({
        prompt:prompt,
}),
})
.then(apiResponse=>{
    const responseURL = ""; //set the url of the response page
    return fetch(responseURL,{
        method:'POST',
        headers : {
            'Content-type':'application/json',
        },
        body: JSON.stringify({
            apiResponse : apiResponse,
        }),
    });
})
.then(()=>{
    response.status(200).send("API response sent successfully");
})
.catch(error => {
    response.status(500).send("Internal Server error");
});

app.listen(PORT);



