function updateClock(){
    const clockElement = document.getElementById('clock')
    const dateElement = document.getElementById('date')

    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2,"0");
    const seconds = now.getSeconds().toString().padStart(2,"0");

    const ampm = now.getHours() >= 12 ? " PM" : "AM";

    const options = {
        weekdays: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const date = now.toLocaleDateString(undefined, options);
    
    clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`
    dateElement.textContent = date;
}

setInterval(updateClock, 1000);
updateClock();