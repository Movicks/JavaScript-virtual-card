function validateNumberInput(inputElement) {
  const inputValue = inputElement.value;
  const validationMessage = document.getElementById('validationMessage');
  if (/[^0-9]/.test(inputValue)) {
    validationMessage.textContent = 'Only numbers are allowed in this field.';
    inputElement.value = inputValue.replace(/[^0-9]/g, '');
  } else {
    validationMessage.textContent = '';
  }
}
// Function to validate CVV numbers and remove non-numeric characters
const cvvInput = document.getElementById('Cvv-inputs-mm');
cvvInput.addEventListener('input', () => {
  const inputValue = cvvInput.value;
  const validationMessage = document.getElementById('validationMessage');

  if (inputValue === '') {
    validationMessage.textContent = '';
  } else if (isNaN(inputValue)) {
    validationMessage.textContent = 'Only numbers are allowed for CVV.';
    cvvInput.value = '';
  } else {
    validationMessage.textContent = '';
  }
});

function validateLetterInput(inputElement) {
  const inputValue = inputElement.value;
  const validationMessage = document.getElementById('validationMessage');
  if (/[^a-zA-Z\s']/.test(inputValue)) {
    validationMessage.textContent = 'Please enter your name.';
    inputElement.value = inputValue.replace(/[^a-zA-Z\s']/g, '');
  } else {
    validationMessage.textContent = '';
  }
}

function validateFormAndSubmit() {
  // Check if the first four inputs have a length of 4
  const input1 = document.getElementById("card-nums1").value;
  const input2 = document.getElementById("card-nums2").value;
  const input3 = document.getElementById("card-nums3").value;
  const input4 = document.getElementById("card-nums4").value;
  
  if (input1.length !== 4 || input2.length !== 4 || input3.length !== 4 || input4.length !== 4) {
    // nice error message
      validationMessage.textContent = 'Please enter your card numbers and must be at least 4 digits each.';
      return false;
  }

  // Check if input 5 contains only letters and spaces
  const Holder = document.getElementById("cardHolder-inputs").value;
  const HolderName = /^[A-Za-z ]+$/;
  
  if (!HolderName.test(Holder)) {
      validationMessage.textContent = 'Please enter the name on the card';
      return false;
  }

  const monthSelect = document.getElementById("select-month");
  const yearSelect = document.getElementById("select-year");

  // Check if a valid option is selected for both selects
  if (monthSelect.selectedIndex === 0 || yearSelect.selectedIndex === 0) {
      validationMessage.textContent = 'Please select valid options for both month and year.';
      return false;
  }

  // Check if cvv inputs has length of 3
  const CVVinput = document.getElementById("Cvv-inputs-mm").value;
  
  if (CVVinput.length !== 3) {
      validationMessage.textContent = 'Please enter the CVV 3 digits at the back of your ATM card';
      return false;
  }

  // If all conditions are met. alert a success message and submit.
  alert("Your payment was successful.");
  return true;
}
