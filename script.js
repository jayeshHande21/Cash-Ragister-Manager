const billAmount = document.querySelector("#bill-amount");

const cashGiven = document.querySelector("#cash-given");

const button = document.querySelector("#button");

const message = document.querySelector("#error");


function validateAmount() {
    message.style.display = "none";
    
    if (billAmount.value > 0)
    
    {
        if (cashGiven.value >= billAmount.value)
         {

            const AmountToBeReturn =cashGiven.value - billAmount.value;
            calculateChange(AmountToBeReturn);

        } 
        else
        {
            showError("Given Amount is Not Sufficient");

        }
    }
    else
    {
        
        
    }
    
const billi=billAmount.value;
console.log(billi);
   

}

function showError(msg) {
 
    message.style.display = "Block";
    message.innerHTML = msg;
}


button.addEventListener("click", validateAmount());