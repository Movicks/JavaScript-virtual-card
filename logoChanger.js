// const cardNumber = document.getElementById('cardNumber').value;
// const cardLogo = document.getElementById('cardLogo');
//     // Function to detect and update card type and logo
//     function detectCardType() {
//       const cardNumber = document.getElementById('card-nums1').value;
//       const cardLogo = document.getElementById('cardLogo');

//       // Define regular expressions for card types
//       const cardRegex = {
//         visa: /^4/,
//         mastercard: /^5/,
//         amex: /^3[47]/,
//         discover: /^6(?:011|5[0-9]{2})/,
//         dinersclub: /^3(?:0[0-5]|[68][0-9])/,
//         jcb: /^(?:2131|1800|35)/,
//       };

//       let cardType = 'unknown';

//       // Check the card number against each regex
//       for (const type in cardRegex) {
//         if (cardRegex[type].test(cardNumber)) {
//           cardType = type;
//           break;
//         }
//       }

//       // Update the card logo based on the detected type
//       switch (cardType) {
//         case 'visa':
//           cardLogo.src = 'Icon/visa.png';
//           break;
//         case 'mastercard':
//           cardLogo.src = 'mastercard_logo.png';
//           break;
//         default:
//           cardLogo.src = 'Icon/visa.png'; // Set a default logo for unknown types
//       }
//     }

//     // Add an event listener to detect card type when the input changes
//     document.getElementById('cardNumber').addEventListener('input', detectCardType);

  // Function to change the card logo based on the first digit of the card number
  function changeCardLogo() {
    const cardNumber = document.getElementById('card-nums1').value;
    const cardLogo = document.getElementById('cardLogo');

    // Get the first digit of the card number
    const firstDigit = cardNumber.charAt(0);

    // Determine the card provider based on the first digit
    let cardProvider = 'unknown';

    if (firstDigit === '2' || firstDigit === '5') {
      cardProvider = 'mastercard';
    } else if (firstDigit === '4') {
      cardProvider = 'visa';
    } else if (firstDigit === '3') {
      cardProvider = 'amex';
    }

    // Set the card logo based on the card provider
    switch (cardProvider) {
      case 'visa':
        cardLogo.src = 'Icons/visa2.png';
        break;
      case 'mastercard':
        cardLogo.src = 'Icons/card.png';
        break;
      case 'amex':
        cardLogo.src = 'Icons/american-express.png';
        break;
      default:
        // Set a default logo if the provider is unknown
        cardLogo.src = 'Icons/visa2.png';
    }
  }

  // Add an event listener to detect card changes as the user types
  document.getElementById('cardNumber').addEventListener('input', changeCardLogo);
