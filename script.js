const creditCardDetails = document.getElementById('cardDet');
    const creditCardRadio = document.getElementById('credit-card');

    const UPIDetails = document.getElementById('upiId');
    const UPIRadio = document.getElementById('pay');


    creditCardRadio.addEventListener('change', () => {
      if (creditCardRadio.checked) {
        creditCardDetails.style.display = 'block';
      } if (UPIRadio.checked) {
        UPIDetails.style.display = 'block';
      }
      else {
        creditCardDetails.style.display = 'none';
        UPIDetails.style.display = 'none';
      }
    });