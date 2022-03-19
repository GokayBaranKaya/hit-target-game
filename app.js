window.addEventListener("DOMContentLoaded", () =>{

    const boxes = document.querySelectorAll(".box")
    let score = document.querySelector("#score")
    score.textContent = 0
    let timeLeft = document.querySelector("#time-left")
    timeLeft.textContent = 10
    let maxScore = document.querySelector("#max-score")
    maxScore.textContent = localStorage.getItem("max-score")


    function randomPosition(){
        let position = -1
        const previousPosition = position
        position = Math.floor(Math.random()*9)
        boxes.forEach(box =>{
            box.classList.remove("active")
            if (box.getAttribute("id") == position){
                box.classList.add("active")
            }
        })
    }

    
    function hitTarget(){
        boxes.forEach(box =>{
            box.addEventListener("mouseup", () =>{
                if (box.classList.contains("active")){
                    score.textContent++
                }
            })
        })
    }


    function decreaseTime(){
        timeLeft.textContent--
        if (timeLeft.textContent == 0){
            alert(`Game Over, Your Score is: ${score.textContent}`)
            timeLeft.textContent = 10

            if (Number(score.textContent) > Number(localStorage.getItem("max-score"))){
                localStorage.setItem("max-score", score.textContent)
                maxScore.textContent = localStorage.getItem("max-score") 
            }
            score.textContent = 0
        }
    }

    function interval(){
        setInterval(randomPosition, 500)
        setInterval(decreaseTime, 1000)
    }
    
    hitTarget()
    interval()
})