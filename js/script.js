function handleSelect(event) {
  event.preventDefault();
  const selection = document.getElementById("question").value;
}

window.addEventListener("load", function() {
  document.getElementById("select-form").addEventListener("submit", handleSelect);
});

<button type="submit">Submit Form</button>