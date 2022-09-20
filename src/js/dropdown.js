const dropdownBtn = document.getElementById("dropdown-btn")
const dropdownText = document.getElementById("dropdown-text")
const dropdownList = document.getElementById("dropdown-list")

let allMails
fetch("./json/maildata.json")
.then(response=>response.json())
.then(data=>{
    allMails=data; 
    allMails.map((i)=>{
        let dropdownHtml = `<li><a href="javascript:void(0)">${i.name}</a></li>`;
        dropdownList.insertAdjacentHTML("beforeend",dropdownHtml);
    })
    dropdownText.textContent = dropdownList.children[0].textContent;
})

dropdownBtn.addEventListener("click",function(e){
    dropdownList.classList.toggle("hidden")
    for(i of dropdownList.children){
        if(i.textContent==dropdownText.textContent){
            i.classList.add("active");
        }
        else{
            i.classList.remove("active");
        }
    }
})

dropdownList.addEventListener("click",function(e){
    let btn = e.target;
    dropdownText.innerText = btn.innerText;
    dropdownList.classList.add("hidden")
    btn.classList.add("active");
})

