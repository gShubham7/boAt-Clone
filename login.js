document.querySelector("#logIn").addEventListener("submit", myLogIn);

let loggedIn_Data = JSON.parse(localStorage.getItem("logIn", "obj")) || [];

function myLogIn(event) {
    event.preventDefault();
    //console.log("inside")
    let logged_Mail = document.querySelector("#eMail").value;
    logged_Mail = logged_Mail.toLowerCase();
    let logged_Pass = document.querySelector("#passWord").value;
    let signUp_Data = JSON.parse(localStorage.getItem("uDetails", "signUp_Data")) || [];
    //console.log(signUp_Data)      


    if (logged_Mail == "" || logged_Pass == "") {
        alert("Fillout all the fields");
        return;
    } else {
        let flag = false;
        signUp_Data.forEach(function (elem) {
            if (logged_Mail == elem.uMail && logged_Pass == elem.uPass) {
                flag = true;
                let obj = {
                    umail: logged_Mail,
                    upass: logged_Pass,
                }
                localStorage.setItem("logIn", JSON.stringify(obj));
            }
        });
        if (flag) {
            alert("Log In Successful");
            window.location.href = "./index.html";
        } else {
            alert("Incorrect email or password");
        }
    }
}