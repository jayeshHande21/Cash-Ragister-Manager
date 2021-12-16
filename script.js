const billAmount = document.querySelector("#bill-amount");

const cashGiven = document.querySelector("#cash-given");

const button = document.querySelector("#button");

const message = document.querySelector("#error");

console.log(cashGiven.value)
function validateAmount() {
    message.style.display = "none";

    if (billAmount.value > 0)

    {
        if (cashGiven.value >= billAmount.value) {

            const AmountToBeReturn = cashGiven.value - billAmount.value;
            calculateChange(AmountToBeReturn);

        } else {
            showError("Given Amount is Not Sufficient");

        }
    } else {
        message.style.display = "none";
        showError("Plese anter a valid amount")

    }

}

function calculateChange(amount) {

}

function showError(msg) {

    message.style.display = "Block";
    message.innerHTML = msg;
}


button.addEventListener("click", validateAmount());