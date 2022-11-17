let countEl = document.getElementById("count-el")

let btns = document.querySelectorAll(".btn")

let count = 0

btns.forEach(function (btn){
    btn.addEventListener("click", function (e){
        const styles = e.currentTarget.classList
        if(styles.contains("decrease")){
            count--    
        }else if(styles.contains("increase")){
            count++
        }else{
            count = 0
        }
        if(count < 0){
            countEl.style.color = "red"
        }else if(count < 4 && count > 0){
            countEl.style.color = "yellow"
        }else if(count === 0){
            countEl.style.color = "black"
        }else{
            countEl.style.color = "green"
        }
        countEl.textContent = count
    })
})