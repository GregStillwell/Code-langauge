window.onload = function() {
  const form = document.getElementById("myForm");
  form.onsubmit = function(event) {
    event.preventDefault();

    document.getElementById("resetButton").addEventListener("click", (event)=> {
    form.reset();
    hideResults();
    });

  //  function hideResults() {
  //    document.getElementById("javascript").setAttribute("class", "hidden");
   //   document.getElementById("Ruby").setAttribute("class", "hidden");
   //   document.getElementById("C#").setAttribute("class", "hidden");
    };

    const question1 = parseInt(document.querySelector("input[name='question1']:checked").value);
    const question2 = parseInt(document.querySelector("input[name='question2']:checked").value);
    const question3 = parseInt(document.querySelector("input[name='question3']:checked").value);
    const question4 = parseInt(document.querySelector("input[name='question4']:checked").value);
    const question5 = parseInt(document.querySelector("input[name='question5']:checked").value);
    const result = question1 + question2 + question3 + question4 + question5;

    

    


  
    

    
  //  if (question === "javascript") {
  //    const javascriptDiv = document.getElementById("javascript")
   //    javascriptDiv.removeAttribute("class")
   //    console.log(question)
    }
      


  
    


    }


    
  //}


