window.onload = function() {
  const form = document.getElementById("myForm");
  form.onsubmit = function(event) {
    event.preventDefault();

    document.getElementById("resetButton").addEventListener("click"), (event) {
    form.reset();  

    function hideResultsAndError() {
      document.getElementById("C#").setAttribute("class", "hidden");
      document.getElementById("javascript").setAttribute("class", "hidden");
      document.getElementById("Ruby").setAttribute("class", "hidden");
    
//     const catLover = document.getElementById("Javascript")
// catLover.setAttribute("class", "hidden");

    const question = (document.getElementById("catLover").value);
    const question2 = (document.getElementById("favoriteColor").value);

    if (question === "javascript") {
      const javascriptDiv = document.getElementById("javascript")
       javascriptDiv.removeAttribute("class")
    }
      


    if (question === "C#") {
      const cDiv = document.getElementById("C#")
      cDiv.removeAttribute("class")
    }

    
  }

  }

}

