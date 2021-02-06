
//Dark Mode for card
  function myFunction() {
    var element1 = document.body;
    var element2= document.body.getElementsByClassName("card-header");
    var element3 = document.body.getElementsByClassName("btn");
    console.log(element2);
    element1.classList.toggle("dark-mode");
    for(i=0; i<element2.length; i++){
        console.log(element2[i]);
        element2[i].classList.toggle("cardheader2");
        
    
    }

    for(i=0; i<element3.length; i++){
        element3[i].classList.toggle("btn2");
    }

  }




//Accordion buttons
function clicked(){
    var x = document.getElementById("btn1");
    console.log(x)
    if (x.innerHTML === "+") {
      x.innerHTML = "-";
    } else {
      x.innerHTML = "+";
    }
}
  
function clicked2(){
    var x = document.getElementById("btn2");
    console.log(x)
    if (x.innerHTML === "+") {
      x.innerHTML = "-";
    } else {
      x.innerHTML = "+";
    }
}
  
  
function clicked3(){
    var x = document.getElementById("btn3");
    console.log(x)
    if (x.innerHTML === "+") {
      x.innerHTML = "-";
    } else {
      x.innerHTML = "+";
    }
}
  

  
function clicked4(){
  var x = document.getElementById("btn4");
  console.log(x)
  if (x.innerHTML === "+") {
    x.innerHTML = "-";
  } else {
    x.innerHTML = "+";
  }
}



  
function clicked5(){
  var x = document.getElementById("btn5");
  console.log(x)
  if (x.innerHTML === "+") {
    x.innerHTML = "-";
  } else {
    x.innerHTML = "+";
  }
}



//Darkmode 


webmode=localStorage.getItem("webmode");
console.log(webmode);

document.addEventListener('DOMContentLoaded', () => {
  console.log("Hi!")

 var themeStylesheet = document.getElementById('theme');
 console.log(themeStylesheet)
  if (webmode==="lightmode"){
    themeStylesheet.href='css/faqlight.css';
  }else{
    themeStylesheet.href='css/faqdark.css';
  }
})


//Search functionality:
$(document).ready(function(){
    console.log("Hi")
    $('.search').on("keyup", function(){
        var value=$(this).val().toLowerCase();
        console.log(value)
        console.log($("#accordion .card"))
        $("#accordion .card ").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1)
        })
    })
})

