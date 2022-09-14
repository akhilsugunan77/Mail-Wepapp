const mailList = document.getElementById("mail-list");
let mailData
let allMails =[],
    personalMails=[],
    clientMails=[];
fetch("./json/maildata.json")
.then((response)=>response.json())
.then((data)=>{
    mailData=data;
    for(item of mailData){

        if(item.filter=="personal"){
            personalMails.push(item)
        }
        if(item.filter=="clients"){
            clientMails.push(item)
        }
        let a = `
            <li>
                <div class="row">
                    <h2 class="heading col">${item.title}</h2><span class="col time">${item.time?item.time:item.date}</span>
                </div>
                <div class="row">
                    <span class="title col">${item.name}</span>
                    <div class="mail-info">
                        ${item.reply?`<span><i class="fa-solid fa-paperclip"></i></span>`:""}
                        ${item.attachment?`<span><i class="fa-solid fa-share"></i></span>`:""}
                        <span class="filter-icon ${item.filter}"></span>
                    </div>   
                </div>
            </li>
        `;
        mailList.insertAdjacentHTML("beforeend",a);
    }
})


