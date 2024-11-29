  const btn = document.getElementById("btn")

 btn.addEventListener("click",loancheck)

function loancheck(){
    const username = document.getElementById("username").value
    const status = document.getElementById("status")
    alert("working")
let msg = "";
    if(username ==""){
        status.innerHTML="please enter the name";
        status.style.color="red";
    }
    else {
    status.innerHTML="welcome"+username;
    status.classList="success";
}
}