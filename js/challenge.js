/*
As a user, I can:

- See the timer increment every second once the page has loaded.
- Manually increment and decrement the counter using the plus and minus buttons.
- "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
- Pause the counter, which should:
    - pause the counter
    - disable all buttons except the pause button
    - switch the label on the button from "pause" to "resume"
- Click the "restart" button to restart the counter and re-enable the buttons.
- Leave comments on my gameplay, such as: "Wow, what a fun game this is."
*/

let counter = document.getElementById('counter')
let count = 0;
let minusBtn = document.getElementById('minus')
let plusBtn = document.getElementById('plus')
let heartBtn = document.getElementById('heart')
let pauseBtn = document.getElementById('pause')
let likeList = document.querySelector('.likes')
let comments = document.querySelector('.comments')
let submitBtn = document.getElementById('submit')
let commentInput = document.getElementById('comment-input')

const printCount = () => {
    counter.innerText = `${count}`
}

let intervalCallback = () => {
    count++
    printCount() 
}

let interval = setInterval(intervalCallback, 1000)

plusBtn.addEventListener('click', () => {
    count++
    printCount()
})

minusBtn.addEventListener('click', () => {
    count--
    printCount()
})

let likeCount = 1;
heartBtn.addEventListener('click', () => { 
    let li = document.createElement('li')
    let span = document.createElement('span')
    likeList.appendChild(li)
    likeCount++
    span.innerText = likeCount
    li.innerText = `${count} has been liked ${likeCount} times`
})

let isDisabled = false;
pauseBtn.addEventListener('click', () => {
    clearInterval(interval)
    if (pauseBtn.innerText === 'resume') {
        pauseBtn.innerText = 'pause'
        interval = setInterval(intervalCallback, 1000)
    }
    else {
        pauseBtn.innerText = 'resume'
    }
    isDisabled = !isDisabled
    plusBtn.disabled = isDisabled
    minusBtn.disabled = isDisabled
    heartBtn.disabled = isDisabled
})

submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    let p = document.createElement('p')
    p.innerText = commentInput.value
    comments.append(p)
    commentInput.value = ''
})