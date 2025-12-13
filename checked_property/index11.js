const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const MasterCardBtn = document.getElementById("MasterCardBtn");
const PayPalBtn = document.getElementById("PayPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = `You're subscribed!`;
    }
    else{
        subResult.textContent = `You're NOT subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You're paying with VISA`;
    }
    else if(MasterCardBtn.checked){
        paymentResult.textContent = `You're paying with MasterCard`;
    }
    else if(PayPalBtn.checked){
        paymentResult.textContent = `You're paying with PayPal`;
    }
    else{
        paymentResult.textContent = `You must select a payment method`;
    }
}


