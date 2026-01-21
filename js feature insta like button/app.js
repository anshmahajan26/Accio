let istatus = document.querySelector("h5");

let addFri = document.querySelector("#add");

let removeFri = document.querySelector("#remove");

addFri.addEventListener("click", () => {
    istatus.innerHTML = "Friends";
    istatus.style.color= "green";
})  

removeFri.addEventListener("click",() => {
    istatus.innerHTML = "I have boyFriend";
    istatus.style.color="red";
})