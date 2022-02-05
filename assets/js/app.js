var cl = console.log;

const submit = document.getElementById("submit");
const fname = document.getElementById("fname");
const contact = document.getElementById("contact")
const email = document.getElementById("email")
const tableContent = document.getElementById("tableContent")
const createStudent = document.getElementById("createStudent")

let arrObj =[];

if(localStorage.getItem("stdinfo")){
    arrObj = JSON.parse(localStorage.getItem("stdinfo"))
    templating(arrObj);
}

function onClickHandler(eve) {
    // cl("Hello Java")
   
    eve.preventDefault();

    let stdObj = {
        Fname: fname.value,
        Contact: contact.value,
        Email: email.value,
    }

    arrObj.push(stdObj);
    localStorage.setItem("stdinfo",JSON.stringify(arrObj))

    arrObj = JSON.parse(localStorage.getItem("stdinfo"))
    createStudent.reset();

    templating(arrObj);
}


function templating(arr){

    let result="";
    
    arr.forEach((std,i) =>{
    result += `<tr>
            <td>${i+1}</td>
            <td>${std.Fname}</td>
            <td>${std.Contact}</td>
            <td>${std.Email}</td>
            </tr>`
    })
    tableContent.innerHTML = result;
}



createStudent.addEventListener("submit",onClickHandler)