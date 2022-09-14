const filters = document.getElementById("filter-btn")

filters.addEventListener("click",filtered)

function filtered(e){
    if(e.target.id=="personal"){
        console.log("personal")
    }
    

}