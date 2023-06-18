function handleSelect(event) {
  event.preventDefault();
  const selection = document.getElementById("petList").value;
}

window.addEventListener("load", function() {
  document.getElementById("Pets").addEventListener("submit", handleSelect);
});

let catLover = document.getElementById("Javascript")
catLover.setAttribute("class", "hidden");

