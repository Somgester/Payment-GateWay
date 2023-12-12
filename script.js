const creditCardDetails = document.getElementById('cardDet');
const creditCardRadio = document.getElementById('credit-card');

let amt = document.getElementById('billAmt').value;


    const UPIDetails = document.getElementById('upiId');
    const UPIRadio = document.getElementById('pay');

    creditCardRadio.addEventListener('change', () => {
      if (creditCardRadio.checked) {
        creditCardDetails.style.display = 'block';
       }
      else {
        creditCardDetails.style.display = 'none';
        UPIDetails.style.display = 'none';
      }
    });
function upi() {
  if (UPIRadio.checked) {
    UPIDetails.style.display = 'block';
  }
  else {
    UPIDetails.style.display = 'none';
  }
}

function paid() {
    alert("Payment Successful");
}
