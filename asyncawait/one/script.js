let textInput = document.getElementById("text");
let delayInput = document.getElementById("delay");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

btn.addEventListener("click", async () => {
    await wait(delayInput.value);
    output.innerText = textInput.value;
});
