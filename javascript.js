
var row = document.getElementsByClassName("row")[0]



function FillHtml(data) {
    data.forEach(element => {
        row.innerHTML+= `
   
        
    <div class="card col-1" style="width: 18rem;">
        <img class="card-img-top" src="${element.image.medium}" alt="Card image cap">
        <div class="card-body">
          <h5 >"${element.name}"</h5>
          <p class="card-text">IMDB Rating  ${element.rating.average}</p>
          <a href="${element.url}" class="btn btn-primary">Check Details</a>
        </div>
      </div>`

    })

}

$.ajax({
method:"GET",
url:"https://api.tvmaze.com/shows"
}).done(data=>FillHtml(data))






   