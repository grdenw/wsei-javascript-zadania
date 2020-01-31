// Zadanie 4

const cardName = document.querySelector("#type")

document.querySelector("input#name").addEventListener("keyup", function (e) {
    const targetValue = e.target.value;
    if(targetValue.length == 1 || targetValue.length == 2) {
        if(targetValue[0] == 4) {
            cardName.innerHTML = "VISA"
        } else if (targetValue[0] == 5) {
            cardName.innerHTML = "Mastercard"
        } else if( targetValue[0] == 3) {
            if(targetValue[1] == 4 || targetValue[1] == 7) {
                cardName.innerHTML = "American Express"
            }
        }
    } else if(targetValue.length >= 13 && targetValue.length <= 16) {
        const cardNameTxt = cardName.innerHTML;
        if(cardNameTxt == "VISA") {
            cardName.style.border = "3px solid green"
        } else if(cardNameTxt == "Mastercard" && targetValue.length == 16) {
            cardName.style.border = "3px solid green"
        } else if(cardNameTxt == "American Express" && targetValue.length == 15) {
            cardName.style.border = "3px solid green"
        }
    } else {
        cardName.style.border = "none"
    }
})
