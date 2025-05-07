
let myabout = document.querySelector("#aboutus")
let about = document.querySelector("#about")
myabout.addEventListener("click" , ()=>{
    about.style.right = "50px"
})

let myjoin = document.querySelector("#joinus")
let join = document.querySelector("#join")
myjoin.addEventListener("click" , ()=>{
    join.style.right = "110px"
})
let mycontact = document.querySelector("#contactus")
let contact = document.querySelector("#contact")
mycontact.addEventListener("click" , ()=>{
    contact.style.right = "20px"
})
let cutabout = document.getElementById("cutabout")
cutabout.addEventListener("click" , ()=>{
    about.style.right="-400px"
})
let cutjoin = document.getElementById("cutjoin")
cutjoin.addEventListener("click" , ()=>{
    join.style.right="-400px"
})
let cutcontact = document.getElementById("cutcontact")
cutcontact.addEventListener("click" , ()=>{
    contact.style.right="-400px"
})
