const clock = document.querySelector(".clock")

const clockTick = () => {
    const today = new Date()

    const hour = today.getHours()
    const minutes = today.getMinutes()
    const seconds = today.getSeconds()

    const template = `
        <span>${hour}</span> : 
        <span>${minutes}</span> : 
        <span>${seconds}</span>
    `
    clock.innerHTML = template
    
}

setInterval(clockTick, 1000)