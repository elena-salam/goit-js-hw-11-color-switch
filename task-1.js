//Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body 
// на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, 
// изменение цвета фона должно останавливаться.
    
const colors = [
     '#FFFFFF',
     '#2196F3',
     '#4CAF50',
     '#FF9800',
     '#009688',
     '#795548',
   ];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const body = document.body;
let timerId = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener("click", onStartClick);
function onStartClick (){
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerId = setInterval(randomChangeColor, 1000);
}

stopBtn.addEventListener("click", onStopClick);
function onStopClick(){
  stopBtn.disabled = true;
  startBtn.disabled = false,
  clearInterval(timerId);
}

function randomChangeColor(){
  const colorIndex = randomIntegerFromInterval(0, colors.length);  
  body.style.backgroundColor = colors[colorIndex]; 
}







