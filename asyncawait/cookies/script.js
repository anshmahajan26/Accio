let nameInput = document.getElementById("name");
let saveBtn = document.getElementById("save");
let loadBtn = document.getElementById("load");
let output = document.getElementById("output");

// Save cookie
saveBtn.addEventListener("click", () => {
  let name = nameInput.value;
  document.cookie = `username=${name}; path=/`;
  alert("Name saved in cookie");
});

// Load cookie
loadBtn.addEventListener("click", () => {
  let cookies = document.cookie.split("; ");

  for (let i = 0; i < cookies.length; i++) {
    let [key, value] = cookies[i].split("=");
    if (key === "username") {
      output.innerText = "Saved Name: " + value;
    }
  }
});
