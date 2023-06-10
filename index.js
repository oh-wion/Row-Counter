let countEl = document.getElementById("count-el")
let count = 0
function increment() {
    count += 1
    countEl.textContent = count
}

let entry = document.getElementById("entries")
function save(){
    let enter = count + " - "
    entry.textContent += enter
    countEl.textContent = 0 
    count = 0
    
}