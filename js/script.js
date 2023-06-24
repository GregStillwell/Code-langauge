window.onload = function() {
  const form = document.getElementById("myForm");
  form.onsubmit = function(event) {
    event.preventDefault();
//     const catLover = document.getElementById("Javascript")
// catLover.setAttribute("class", "hidden");

    const question = (document.getElementById("catLover").value);
    const question2 = (document.getElementById("favoriteColor").value);

    if (question === "javascript") {
      const javascriptDiv = document.getElementById("javascript")
      javascriptDiv.removeAttribute("class")
      


    if (question === "C#") {
      const cDiv = document.getElementById("C#")
      cDiv.removeAttribute("class")
    }
    }

  }

}

