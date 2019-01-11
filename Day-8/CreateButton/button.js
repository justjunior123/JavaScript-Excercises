let btn = document.getElementById("btn")
let counter = btn.value
// let counter = "5"
btn.addEventListener("click",function(){
    counter++
    btn.innerHTML = counter.toString()
})
