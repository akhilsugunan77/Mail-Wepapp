const category = document.getElementById("category");
const filters = document.getElementById("filter-btn");
const mailList = document.getElementById("mail-list");

let allMails
fetch("./data/maildata.json")
.then(response=>response.json())
.then(data=>{
    allMails=data; 
    allMails?addList(allMails):skeleton(3);
;})
.catch(error=>console.log(error))

category.addEventListener("click",(e)=>{
    let btnId=e.target;
    console.log(btnId)
})

filters.addEventListener("click",(e)=>{
    let btnId=e.target.id;
    switch(btnId){
        case "personal":
            filter("personal");
            break;
        case "clients":
            filter("clients");
            break;
        case "family":
            filter("family");
            break;
        case "friends":
            filter("friends");
            break;
        case "archives":
            filter("archives");
            break;
    }
    let linkBtn=filters.children
    for(i of linkBtn){
        i.children[0].classList.remove("active");
    }
    e.target.classList.add("active")
})



function addList(items){
    items.map((i)=>{
        const date = new Date(i.time)
        const mailDate = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
        const mailTime = date.getHours()+":"+date.getMinutes();
        let a = `
        <li>
            <div class="row">
                <h2 class="heading col">${i.title}</h2><span class="col time">${mailTime}</span>
            </div>
            <div class="row">
                <span class="title col">${i.name}</span>
                <div class="mail-info">
                    ${i.reply?`<span><i class="fa-solid fa-paperclip"></i></span>`:""}
                    ${i.attachment?`<span><i class="fa-solid fa-share"></i></span>`:""}
                    <span class="filter-icon ${i.filter}"></span>
                </div>   
            </div>
        </li>
    `
    mailList.insertAdjacentHTML("beforeend",a);
    })
}

function filter(filter){
    mailList.innerHTML="";
    addList(allMails.filter(i=>i.filter==filter));
}

// function notification(arr){
//     return arr.filter(item=>item.number?item:"").length
// }

function skeleton(num){
    let a = `<li class="skeleton"> 
                <div></div><div></div>
            </li>`
    for (let i = 0; i < num; i++) {   
        mailList.insertAdjacentHTML("beforeend",a)  
    }
}


