const loanbtn = document.getElementById("loanbtn");

 loanbtn.addEventListener("click",loancheck)

 function loancheck(){
    const status = document.getElementById("status")
    const username = document.getElementById("username").value
    const cibil = document.getElementById("cibil").value;
    const  salary = document.getElementById("salary").value

let msg="";
 
 if(username ===""&& cibil ==="" && salary ===""){
    msg="please fill all the fields*";
    status.style.color="red";
}
else {
    if(cibil>800 && salary>60000){
        msg="congratulations " + username + " 20L Loan Approved";
    }
else if(cibil>780 && salary>50000){
    msg="congratulations " + username + " 15L Loan Approved";
}
else if(cibil>750 && salary>40000){
    msg="congratulations " + username + " 10L Loan Approved";
}
else if(cibil>720 && salary>30000){
    msg="congratulations " + username + " 5L Loan Approved";
}
else{
    msg="sorry " + username + " loan not approved"
}
status.classList="text-bg-success my-3 p-2"
}
status.innerHTML=msg
}
  
 
 

