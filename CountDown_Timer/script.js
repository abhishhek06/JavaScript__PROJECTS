const btn = document.getElementById('btn')
const timeInput = document.getElementById('time-input')
const countDownDisplay = document.getElementById('countdown-display')


function startTimer() {
    let valueInSeconds = parseInt(timeInput.value);

    if(isNaN(valueInSeconds)){
        countDownDisplay.innerText = "Please enter a valid Number"
        return;
    }
    
    if(valueInSeconds <= 0){
        countDownDisplay.innerText = "Please enter seconds greater than 0"
        return

    }

    const timer = setInterval(function() {
        valueInSeconds--;
        countDownDisplay.innerText = `Time remaining ${valueInSeconds} seconds`
        if(valueInSeconds <= 0){
            clearInterval(timer);
            countDownDisplay.innerText = "Time up"
        }
    }, 1 * 1000)
    
};
btn.addEventListener("click", startTimer)