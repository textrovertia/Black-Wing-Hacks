
//For lists of resources
function loopthroughlist(myvar, content){
    var i;
    for(i=0; i<myvar.length; i++){
        console.log(myvar[i])
        console.log(myvar[i][0]),
        console.log(myvar[i][1])
        $(content).append(`<li><a href='${myvar[i][1]}'>${myvar[i][0]}</a></li>`)
    }
}

$(document).ready(function(){
    swal("A wild Pikachu appeared! What do you want to do?", {
        buttons: {
          beginner: {text: "Beginner",
                     value: "beginner"},
          intermediate: {
                    text: "Intermediate",
                    value: "immediate"},
          advanced: {
                    text:"Advanced",
                    value: "advanced"
          },
        },
      })
      .then((value) => {
        switch (value) {
       
          case "advanced":
            $.getJSON('/json/fullstack.json', function(data){
                  console.log(data[2].track)
                  console.log(data[2].links)
              })
            
       
          case "immediate":
            $.getJSON('/json/fullstack.json', function(data){
                console.log(data[1].track)
            })
            swal("Gotcha!", "Pikachu was caught!", "success");
            break;
        
          case "beginner":
            $.getJSON('/json/fullstack.json', function(data){
                console.log(data[0].track)
               const paid=data[0].paidcourses
               loopthroughlist(paid, '#paid')
            })
       
          default:
            swal("Got away safely!");
        }
      });

      
      
   

    
})