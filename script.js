alert ("Upvote and share it.\nHave a nice day💐💐.\nHappy Coding....🤗\n😍🤩🤗");
//Created by Pushkar Roy

function chooseo() {
    
document.getElementById("mob").style.display="block";

document.getElementById("mail").style.display="none"; 

document.getElementById("mail").value="";   

}

function chooset() {
    
document.getElementById("mob").style.display="none";

document.getElementById("mob").value="";

document.getElementById("mail").style.display="block";   

}



var otp = ((1000000*Math.random()) | 0);

var flag = false;

function getotp() {

var mob = document.getElementById("mob").value;

var mail = document.getElementById("mail").value;

if( mob == "" && mail == "" ) {
    alert("Please enter your Email or Mobile no.");

}
    
else {

otp = ((1000000*Math.random()) | 0);

alert("Dear Sir/Madam, "+otp+ " is your OTP (One Time Password). Please do not share this with anyone");

document.getElementById("mob").readOnly="readOnly";

document.getElementById("mail").readOnly="readOnly";
    
document.getElementById("subbtn").style.display="none";

document.getElementById("timer").style.display="block";


var timeleft = 60;
var downloadTimer = setInterval(function() {

timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    
if(timeleft <= 10){
    
document.getElementById("timer").style.color="red";
    
}
    
if(timeleft <= 0){
clearInterval(downloadTimer);
document.getElementById("timer").style.display="none";

document.getElementById("resend").style.display="block";

}
},1000);


document.getElementById("otppoint").style.display="block";


document.getElementById("otpbtn").style.display="block";

document.getElementById("r1").style.display="none";

document.getElementById("r2").style.display="none";

}

}

function confotp() {

var cotp = document.getElementById("otppoint").value;

if (flag == false) {
 
 if(cotp==otp) {
 
 document.getElementById("msg").innerHTML="Thankyou for providing correct OTP.<br>Have a nice day.<br>Happy coding...";
 
 document.getElementById("msg").style.color="green";
 
 document.getElementById("otpbtn").style.display="none";
 
 document.getElementById("timer").style.display="none";
 
 document.getElementById("resend").style.display="none";
 
 document.getElementById("r1").style.display="none";
 
 document.getElementById("r2").style.display="none";
 
 flag = true;
    
 }
 
 else if(cotp == ""){
     alert("Please enter your OTP.");
 }
    
 else {
 document.getElementById("msg").innerHTML="Incorrect OTP! <br>Please try again..";
 
 document.getElementById("msg").style.color="red";
 
document.getElementById("otppoint").value="";
    
 }
 
}
    
else {

document.getElementById("msg").innerHTML="Thankyou again...";
 
 document.getElementById("msg").style.color="green";
 
 }

}


function resend() {

otp = ((1000000*Math.random()) | 0);
    
alert("Dear Sir/Madam, "+otp+ " is your OTP (One Time Password). Please do not share this with anyone");

document.getElementById("resend").style.display="none";

document.getElementById("timer").style.display="block";


var timeleft = 60;
var downloadTimer = setInterval(function() {

timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    
if(timeleft >= 10){
    
document.getElementById("timer").style.color="green";
    
}
    
if(timeleft <= 10){
    
document.getElementById("timer").style.color="red";
    
}
    
if(timeleft <= 0){
clearInterval(downloadTimer);
document.getElementById("timer").style.display="none";

document.getElementById("resend").style.display="block";

}
},1000);


}


