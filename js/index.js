// API URL 

const advice__number = document.getElementById("advice__number");
const advice__output = document.getElementById("advice__output");
const roll__btn = document.getElementById("roll__btn");

const getAdvice = () => {
    // advice__number.innerHTML = `Hello`;
    // advice__output.innerHTML = ` `;
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        advice__number.innerHTML = `Advice #${data.slip.id}`;
        advice__output.innerHTML = `"${data.slip.advice}"`;
        console.log(data);
      });
  };
  
  roll__btn.addEventListener("click", () => {
    getAdvice();
  });
  
  getAdvice();
// fetch('https://api.adviceslip.com/advice')
// .then(res => res.json())
// .then(data => console.log(data))

// slip is advice
// id is number



