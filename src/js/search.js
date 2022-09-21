const searchInput = document.getElementById("search")
const searchList = document.getElementById("data-list")

searchInput.addEventListener("click",function(e){
    if(searchList.classList.contains("hidden")){
        searchList.classList.remove("hidden")
        searchInput.classList.add("active")
    }
    else{
        searchList.classList.add("hidden")
        searchInput.classList.remove("active")
    }
})
searchInput.addEventListener("keydown",e =>{
    if(e.key=="Escape"){
        searchList.classList.add("hidden")
        searchInput.classList.remove("active")
    }
})
searchInput.addEventListener("focus",e =>{
    searchList.classList.remove("hidden")
    searchInput.classList.add("active");
})

searchList.addEventListener("click",function(e){
    searchInput.value = e.target.innerText;
    searchList.classList.add("hidden");
})

window.addEventListener("click",function(e){
    if(e.target!=searchInput&&e.target!=searchList){
        searchInput.classList.remove("active");
        searchList.classList.add("hidden");
    }
})