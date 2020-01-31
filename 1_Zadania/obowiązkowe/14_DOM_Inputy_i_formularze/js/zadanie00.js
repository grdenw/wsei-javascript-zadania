//zadanie 0

document.querySelector(".btn").addEventListener("click", function (e) {
    const errorMsgContainer = document.querySelector(".error-message");
    errorMsgContainer.innerText = ""

    if(!document.querySelector("#email").value.includes("@")) {
        e.preventDefault()
        errorMsgContainer.innerHTML += " <p>Email musi posiadać znak @</p>"
    }
    if(document.querySelector("#name").value.length < 6) {
        e.preventDefault()
        errorMsgContainer.innerHTML += "<p>Twoje imię jest za krótkie</p>"
    }
    if(document.querySelector("#surname").value.length < 6) {
        e.preventDefault()
        errorMsgContainer.innerHTML += "<p>Twoje nazwisko jest za krótkie</p>"
    }
    if(document.querySelector("#pass1").value !== document.querySelector("#pass2").value || document.querySelector("#pass1").value.length == 0) {
        e.preventDefault()
        errorMsgContainer.innerHTML += "<p>Hasła nie są takie same lub puste</p>"
    }
    if(!document.querySelector("#agree").checked) {
        e.preventDefault()
        errorMsgContainer.innerHTML += "<p>Musisz zaakceptować warunki.</p>"
    }
})