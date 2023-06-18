window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    let catLover = document.getElementById("Javascript")
catLover.setAttribute("class", "hidden");

const question = (document.querySelector("input#codeLangauge").value);
    

function handleSelect(event) {
  event.preventDefault();
  const selection = document.getElementById("question").value;
}

window.addEventListener("load", function() {
  document.getElementById("codeLangauge").addEventListener("submit", handleSelect);
});
  }
}

