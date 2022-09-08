const searchInput = document.getElementById("search")
const searchList = document.getElementById("search-list")

searchInput.addEventListener("click",function(e){
    if(searchList.classList.contains("hidden")){
        searchList.classList.remove("hidden")
    }
    console.log(e)
})

searchInput.addEventListener("keydown",e =>{
    if(e.key=="Escape"){
        searchList.classList.add("hidden")
    }
})


searchList.addEventListener("click",function(e){
    searchInput.value = e.target.innerText;
    searchList.classList.add("hidden");
})

window.addEventListener("click",function(e){
    if(e.target = searchList.children){
        console.log("true")
    }
    else{
        console.log(false)
    }
})