document.querySelector("#signUp").addEventListener("submit", mySignUp);

let signUp_Data = JSON.parse(localStorage.getItem("uDetails", "signUp_Data")) || [];

function mySignUp(event) {
    event.preventDefault();
    //console.log("inside")
    let fName = document.querySelector("#fName").value;
    let lName = document.querySelector("#lName").value;
    let mail = document.querySelector("#eMail").value;
    mail = mail.toLowerCase();
    console.log(mail)
    let pass = document.querySelector("#passWord").value;

    let userDetails = {
        uFName: fName,
        uLName: lName,
        uMail: mail,
        uPass: pass,
    }

    if (fName == "" || lName == "" || mail == "" || pass == "") {
        alert("Fill all the Details");

    } else {
        signUp_Data.push(userDetails);
        localStorage.setItem("uDetails", JSON.stringify(signUp_Data));
        window.location.href = "./login.html";
    }
}