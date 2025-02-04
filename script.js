let jokecontainer=document.getElementById("joke");
let button=document.getElementById("button");

let url="Paste your api here";

const getjoke=()=>{
    fetch(url)
   .then(data=>data.json())
   .then(item=>{
    jokecontainer.textContent=item.joke;
   });
}


button.addEventListener("click",getjoke);