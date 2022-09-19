// User data gathering through signup

function signup(){
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var number = document.getElementById("number").value;

    var obj = {
        fName,
        lName,
        email,
        pass,
        number,
    }
    console.log(obj) // Data is now in object

    if(fName == "" || lName == "" || email == "" || pass == "" || number == ""){
        alert("You have missed some fields");
        window.location.reload();
    }
    else{
        console.log("Info came");
        localStorage.clear();
        localStorage.setItem("obj", JSON.stringify(obj));
        window.location = "signin.html"
    }
}

// Getting value from sign in form and matching user info to access the system

function signin (){
    var objdata = localStorage.getItem("obj");
    var dataConvert = JSON.parse(objdata);
    
    console.log(dataConvert.fName)

    var emailin = document.getElementById("emailin").value;
    var passin = document.getElementById("passin").value;

    console.log("emailin value", emailin, "passin value", passin) // Login form values are here now

    if(emailin == "" || passin == ""){
        alert("Fields are missing");
        location.reload()
    }
    else{
        if(emailin == dataConvert.email && passin == dataConvert.pass){
            console.log("you are logged in");
            window.location = 'movies.html'
        }
        else{
            alert("Email or Password is incorrect")
        }
    }
}

