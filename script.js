
function darkMode(){

    document.body.classList.toggle("dark");

}
function registerUser(){

let name=document.getElementById("regName").value;
let email=document.getElementById("regEmail").value;
let pass=document.getElementById("regPass").value;


if(name=="" || email=="" || pass==""){

alert("Fill all details");
return;

}


localStorage.setItem("email",email);
localStorage.setItem("password",pass);
localStorage.setItem("name",name);


alert("Registration Successful");

}



function loginUser(){

let email=document.getElementById("loginEmail").value;
let pass=document.getElementById("loginPass").value;


if(email==localStorage.getItem("email") &&
pass==localStorage.getItem("password")){


alert("Login Successful");


}
else{

alert("Invalid Login");

}

}




function calculateTime(){

let speed=document.getElementById("speed").value;


let distance=210;


let time=distance/speed;


document.getElementById("timeResult").innerHTML=
"Estimated Travel Time: "+time.toFixed(2)+" Hours";

}




function showRoute(place){


let info="";


if(place=="Delhi")
info="Starting point of Expressway";


else if(place=="Baghpat")
info="Important route connection";


else if(place=="Saharanpur")
info="Major city near Uttarakhand border";


else
info="Final destination";


document.getElementById("routeInfo").innerHTML=info;


}




function submitFeedback(){


document.getElementById("feedbackMsg").innerHTML=
"Thank you for your valuable feedback!";


}




function showDistance(){

    document.getElementById("distance").innerHTML =
    "Delhi to Dehradun distance is around 210 km.";

}



function validateForm(){

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;


    if(name=="" || email==""){

        alert("Please fill all details");
        return false;

    }


    alert("Feedback submitted successfully");

    return true;

}
function showTravelInfo(){

document.getElementById("travelResult").innerHTML =
"Safe Journey! Route details are displayed above.";

}