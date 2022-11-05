document.querySelector("form").addEventListener("submit", payFunc);

function payFunc(event) {
    event.preventDefault();
    let cNumber = document.querySelector("#card").value;
    let cvvNum = document.querySelector("#cvv").value;
    let Date = document.querySelector("#expDate").value;
    let uName = document.querySelector("#name").value;

    if (cNumber === "" || cvvNum === "" || Date === "" || uName === "") {
        alert("All fields are mandatory");
        return;
    } else if (cNumber == 1234567812345678 && cvvNum == 987) {
        window.location.href = "./OTP.html";
    }
}