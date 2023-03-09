 const startBtn = document.querySelector('button{data-start}');
 const stopBtn = document.querySelector('button[data-stop]');
 const body = document.querySelector('body');
 let timerId = null;

 startBtn.addEventListener('click', onBtnStartChangeColor);

 stopBtn.disabled = true;
 stoptBtn.addEventListener('click', onBtnStopChangeColor);

 function onBtnStartChangeColor(){
     stopBtn.disabled = false;
     startBtn.disabled = true;

     timerId = setInterval(() => {
         body.style.backgroundColor = getRandomHexColor()
     }, 1000);
 }

 function onBtnStopChangeColor(){
     stopBtn.disabled = true;
     startBtn.disabled = false;
 }
 function getRandomHexColor() {
     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
   }