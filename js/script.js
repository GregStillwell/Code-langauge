window.onload = function() {
  const form = document.getElementById("myForm");
  form.onsubmit = function(event) {
    event.preventDefault();

    const question1 = parseInt(document.querySelector("input[name='question1']:checked").value);
    const question2 = parseInt(document.querySelector("input[name='question2']:checked").value);
    const question3 = parseInt(document.querySelector("input[name='question3']:checked").value);
    const question4 = parseInt(document.querySelector("input[name='question4']:checked").value);
    const question5 = parseInt(document.querySelector("input[name='question5']:checked").value);
    const result = question1 + question2 + question3 + question4 + question5;

    if (result >= 10) {
      Ruby.removeAttribute("class");
      form.setAttribute("class", "hidden");
      reset.removeAttribute("class");
} else if (result >= 15) {
      javascript.removeAttribute("class");
      form.setAttribute("class", "hidden");
      reset.removeAttribute("class");

} else if (result >= 20) {
      cSharp.removeAttribute("class");
      form.setAttribute("class", "hidden");
      reset.removeAttribute("class");
};     

    document.getElementById("resetButton").addEventListener("click", (event)=> {
    form.reset();
    hideResults();
    });



    const javascript = document.getElementById("javascript");
    const cSharp = document.getElementById("c#");
    const Ruby = document.getElementById("Ruby");


    
    }
      

    }


