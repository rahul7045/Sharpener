

// validation

const myForm = document.querySelector("#my-form");
const nameEle = document.querySelector('#name');
const emailEle = document.querySelector('#email');
const msg = document.querySelector('.msg');

const userList = document.querySelector(".userList");

myForm.addEventListener('submit', onSubmit);

//userList.addEventListener('click', deleteItem);

// function localstorageItem() {
//    for (var i = 0; i < localStorage.length; i++) {
//       const li = document.createElement("li");
//       const info = localStorage.getItem(localStorage.key(i))
//       const myInfo = JSON.parse(info);
//       li.innerHTML = `<li id=${myInfo.email}> ${myInfo.name} - ${myInfo.email}  <button onClick= deleteUser("${myInfo.email}") >Delete</button>     <button onClick= editUser(emailEle.value)>Edit</button>
//     </li>`
//       userList.appendChild(li);
//    }

// }

// localstorageItem();



// function deleteUser(email) {
//    localStorage.removeItem(`userdetail${email}`)

//   const childNode = document.getElementById(email);

//    userList.removeChild(childNode);

// }


// new methods
window.addEventListener("DOMContentLoaded" , ()=>{

   axios.get('https://crudcrud.com/api/d1bbd2c384154daea062892e2b0e9cf6/appointmentData')
   .then(res=>{
      console.log(res.data);
      for(var j=0;j<res.data.length;j++){

         showNewUserOnScreen(res.data[j]);
      }
   })
   .catch(err =>console.log(err))

   
})

function showNewUserOnScreen(myInfo){
   const childNode = `<li id=${myInfo.email}> ${myInfo.name} - ${myInfo.email} <button onClick= deleteUser("${myInfo.email}") >Delete</button>
   <button onclick=editUserDetails('${myInfo.email}','${myInfo.name}')>Edit User </button>

   </li>`

   userList.innerHTML = userList.innerHTML + childNode;
}


function onSubmit(e) {
   e.preventDefault();

   if (nameEle.value == "" || emailEle.value == "") {
      msg.innerHTML = "Please Enter Your Email and Password to login ";

      setTimeout(() => {
         msg.remove();
      }, 3000);
   } else {
      let myobj = {
         name: nameEle.value,
       email: emailEle.value
      }

      axios.post('https://crudcrud.com/api/d1bbd2c384154daea062892e2b0e9cf6/appointmentData',myobj)
      .then(data =>{
         console.log(data)
      })
      .catch(err => console.log(err))

      //localStorage.setItem(`userdetail${emailEle.value}`, JSON.stringify(myobj))
      showNewUserOnScreen(myobj);
      nameEle.value = "";
      emailEle.value = "";
   }
}

function deleteUser(email){
   localStorage.removeItem(`userdetail${email}`);

   const childNode = document.getElementById(email);

   userList.removeChild(childNode);

}

function editUserDetails(email , name){
   nameEle.value = name;
   emailEle.value =email;

   deleteUser(email);


}






//<button onClick= deleteUser("${myInfo.email}") >Delete</button>
//<button onClick = deleteItem("${myobj.description}")>Delete</button>