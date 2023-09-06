   // JavaScript code to change the credit card logo
   const cardLogo = document.getElementById('cardLogo');
   const userInput = document.getElementById('card-nums1');

   // Initial logo path
   let currentLogo = 'Icons/visa.png';

  // Function to change the logo based on the first digit
  function changeLogo() {
    const inputValue = userInput.value;
    if (inputValue.length > 0) {
        const firstDigit = inputValue[0]; // Get the first digit
        if (firstDigit === '2' || firstDigit === '5') {
            currentLogo = 'Icons/card.png';
        }

        if (firstDigit === '3') {
          currentLogo = 'Icons/american-express.png';
      } 
      if (firstDigit === '4') {
        currentLogo = 'Icons/visa2.png';
    } 

    } else {
        currentLogo = 'Icons/visa2.png'; // Default logo when input is empty
    }
    cardLogo.src = currentLogo;
    console.log(currentLogo);
}


   // Add an input event listener to detect user input changes
   userInput.addEventListener('input', changeLogo);
