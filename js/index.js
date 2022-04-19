// API URL 

const apiUrl = "https://api.adviceslip.com/advice"; 

// function for fetching API 

async function getApi(){
    const Resp = await fetch(apiUrl);
    let data = await Resp.json();
    return data;
}


// Gets HTML elements 

const getAdvice = () => {
    Promise.resolve(getApi())
    .then((data) => {
        let adviceNumber = document.getElementById("advice");
        let adviceText = document.getElementById("advice__output");

        adviceNumber.innerHTML = "ADVICE #" + data.slip.id;
        adviceText.innerHTML = "\"" + data.slip.advice + "\""
    })
}



