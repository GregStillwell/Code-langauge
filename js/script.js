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


const javascript = document.getElementById("javascript");
const cSharp = document.getElementById("cSharp");
const ruby = document.getElementById("ruby");
     

if (result >= 18) {
      ruby.removeAttribute("class");
      form.setAttribute("class", "hidden");
      resetButton.removeAttribute("class");
      
     
} else if (result >= 12) {
      javascript.removeAttribute("class");
      form.setAttribute("class", "hidden ");
      resetButton.removeAttribute("class");

} else if (result >= 6) {
      cSharp.removeAttribute("class");
      form.setAttribute("class", "hidden");
      resetButton.removeAttribute("class");
      console.log(resetBut)

let resetButton = querySelector("resetButton");
    resetButton.addEventListener("click", function() {
        window.location.reload()
        
});

      
};     



    
    }
}
