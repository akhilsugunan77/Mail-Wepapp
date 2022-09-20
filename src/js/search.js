const searchInput = document.getElementById("search")
const searchList = document.getElementById("data-list")

searchInput.addEventListener("click",function(e){
    if(searchList.classList.contains("hidden")){
        searchList.classList.remove("hidden")
    }
    else{
        searchList.classList.add("hidden")
    }
})
searchInput.addEventListener("keydown",e =>{
    if(e.key=="Escape"){
        searchList.classList.add("hidden")
    }
})
searchInput.addEventListener("focus",e =>{
    searchList.classList.remove("hidden")
})
searchInput.addEventListener("focusout",e =>{
    searchList.classList.add("hidden");
})


searchList.addEventListener("click",function(e){
    searchInput.value = e.target.innerText;
    searchList.classList.add("hidden");
})

window.addEventListener("click",function(e){
    if(e.target==searchInput||e.target==searchList){
        
    }
    else{
        searchList.classList.add("hidden");
    }
})