
//For lists of resources: Loops through the JSON list of resources and displays them 
function loopthroughlist(myvar, content){
    var i;
   if(myvar!==undefined){
    for(i=0; i<myvar.length; i++){
      
      console.log(myvar[i])
      console.log(myvar[i][0]),
      console.log(myvar[i][1])

      $(content).append(` <div class="col-md-4">
      <div class="card">
      <img class="card-img-top img-fluid" src="${myvar[i][2]}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${myvar[i][0]}</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="${myvar[i][1]}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>`)
      // $(content).append(`<li><a href='${myvar[i][1]}'>${myvar[i][0]}</a></li>`)
  }

   }else{
     $(content).append("<h3>We are still searching for this content</h3>")
   }
   
}

$(document).ready(function(){
  //Sweet alert: What is your level of expertise
    swal("What is your level of expertise in uiux design", {
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

      //after value is given, then we loop through
      .then((value) => {
        switch (value) {
       
          case "advanced":
            $.getJSON('/json/uiux.json', function(data){
                  console.log(data[2].track)
                  
                const paid=data[2].paidcourses
                loopthroughlist(paid, '#paid')
 
                const free=data[2].freecourses 
                loopthroughlist(free, '#free')

                const article=data[2].articles
                loopthroughlist(article, '#articles' )

                $('#level').append(data[2].track)
              })

              swal("Excellent!", "You chose advanced level", "success")

            break;
            
       
          case "immediate":
            $.getJSON('/json/uiux.json', function(data){
                console.log(data[1].track)
                console.log(data[1].track)

                const paid=data[1].paidcourses
                loopthroughlist(paid, '#paid')
 
                const free=data[1].freecourses 
                loopthroughlist(free, '#free')

                const article=data[1].articles
                loopthroughlist(article, '#articles' )

                $('#level').append(data[1].track)

            })
            swal("Excellent!", "You chose intermediate level", "success")
            break;
        
          case "beginner":
            $.getJSON('/json/uiux.json', function(data){
                console.log(data[0].track)

               const paid=data[0].paidcourses
               loopthroughlist(paid, '#paid')

               const free=data[0].freecourses 
               loopthroughlist(free, '#free')

               const article=data[1].articles
                loopthroughlist(article, '#articles' )

            })

            break
       
          default:
            swal("Please refresh and pick a course");
        }
      });

      
      
   

    
})