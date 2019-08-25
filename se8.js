
var news;
var category="general";
getNews(category)

links=document.getElementsByClassName("nav-link") ;
for(var i=0 ; i<links.length ; i++)
{
    links[i].addEventListener("click",function(e){
        category=e.target.innerHTML;
        getNews(category);
        
    })

}


function  getNews(cat)
{
  
    var req = new XMLHttpRequest();
    var url=`https://newsapi.org/v2/top-headlines?country=us&category=`+cat+`&apiKey=a64873e5a34e4b8ea3b63bc8032ef4a8`;
    req.open("GET",url);
   

    req.onreadystatechange =function()
    {
       if(req.readyState == 4 && req.status ==  200)
       {
         news=JSON.parse( req.response);
         news=news.articles;
         disblay();
       }
    }
    req.send();
}



 function disblay()
 {
     var temp="";
     for(var i=0;i<news.length;i++)
     {
         temp+=`<div class="col-md-4">
                   
         <div class="new my-3">
<div class="card" >
  <img class="card-img-top img-fluid cae2 " src="`+news[i].urlToImage+`" alt="Card image cap">
  <div class="card-body cae overflow-auto">
    <h5 class="card-title">`+news[i].title+`</h5>
    <p class="card-text  ">`+news[i].description+`</p>
 
  </div>
</div>
         
         </div>

    </div>`
     }
     document.getElementById("rowData").innerHTML=temp;
 }




