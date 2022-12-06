

const formEl = document.querySelector('#myForm');
const msg = document.querySelector('.message');
const userList = document.querySelector(".userList")

const amountEl = document.querySelector("#amount");
const descriptionEl = document.querySelector("#description");
const categoryEl = document.querySelector("#category");

formEl.addEventListener('submit' , onSubmit)

window.addEventListener('DOMContentLoaded' , function(){
    for(let i=0;i<localStorage.length;i++){
        const info = localStorage.getItem(localStorage.key(i));
        const myinfo = JSON.parse(info) ;
        showNewUserOnScreen(myinfo);
    }
})

function showNewUserOnScreen(myobj){
   const child = `<li id =${myobj.description}>Category :-${myobj.category} Amount:-${myobj.amount} Description:-${myobj.description} <button onClick = deleteItem("${myobj.description}")>Delete</button><button onClick = editItem('${myobj.description}','${myobj.category}','${myobj.amount}')>Edit</button></li>`
   userList.innerHTML = userList.innerHTML + child
}

function onSubmit(e){
    e.preventDefault();
    if(amountEl.value == "" && descriptionEl.value == "" &&  categoryEl.value == "" ){
        msg.innerHTML = "Please Enter Amount , Description and category";
        setTimeout(function(){
           msg.remove()
        } , 5000)
    }else{ 
        const myobj = {
            amount : amountEl.value,
            description : descriptionEl.value,
            category : categoryEl.value
        }
        localStorage.setItem(`user${descriptionEl.value}` , JSON.stringify(myobj) );
        showNewUserOnScreen(myobj)
        amountEl.value="";
        descriptionEl.value =""
    }
    
}

function deleteItem(description){
    localStorage.removeItem(`user${description}`);
    const child = document.getElementById(description);

    userList.removeChild(child);
}

function editItem(description , category  , amount){
    descriptionEl.value = description;
    amountEl.value = amount;
    categoryEl.value=category;

    deleteItem(description);
}