//Get references to the input field and display div

const inputFields = document.querySelectorAll('.digits-input');
const textInput1 = document.getElementById('card-nums1');
const textInput2 = document.getElementById('card-nums2');
const textInput3 = document.getElementById('card-nums3');
const textInput4 = document.getElementById('card-nums4');

const displayDiv1 = document.getElementById('cardNumDisplay');
const displayDiv2 = document.getElementById('cardNumDisplay2');
const displayDiv3 = document.getElementById('cardNumDisplay3');
const displayDiv4 = document.getElementById('cardNumDisplay4');

// an event listener to the input field for the input event
textInput1.addEventListener('input', function () {
    // Gets the current value of the input field
    const inputValue1 = textInput1.value;

    // Updates the content of the display div with the inputted value
    displayDiv1.textContent = inputValue1;
});

textInput2.addEventListener('input', function () {
  // Gets the current value of the input
  const inputValue2 = textInput2.value;


  displayDiv2.textContent = inputValue2;
});

textInput3.addEventListener('input', function () {
  // Gets the current value of the input
  const inputValue3 = textInput3.value;


  displayDiv3.textContent = inputValue3;
});

textInput4.addEventListener('input', function () {
  // Gets the current value of the input
  const inputValue4 = textInput4.value;

  displayDiv4.textContent = inputValue4;
});


// an event listener to each input field
inputFields.forEach(function (input, index, fields) {
    input.addEventListener('input', function () {
        const inputValue1 = input.value;
        const inputValue2 = input.value;
        const inputValue3 = input.value;
        const inputValue4 = input.value;

        // Check if the input value has reached 4 digits
        if (inputValue1,inputValue2,inputValue3,inputValue4.length === 4) {
            // Move to the next input field, if available
            if (index < fields.length - 1) {
                fields[index + 1].focus();
            }
        }
    });
});

// references to the card holder name and inputs
const cardHolderInputs = document.getElementById('cardHolder-inputs');
const Holder = document.getElementById('name-display');

// an event listener to the input field for the 'input' event
cardHolderInputs.addEventListener('input', function () {
    // current value of the input field
    const CardHolderName = cardHolderInputs.value;

    // Updates the content of the card holder name field with the inputted value
    Holder.textContent = CardHolderName;
});

//expiration date dom update 
document.querySelector('#select-month').oninput = () => {
  document.querySelector('#month').innerText = document.querySelector('#select-month').value;
}
document.querySelector('#select-year').oninput = () => {
  document.querySelector('#year').innerText = document.querySelector('#select-year').value;
}

document.querySelector('.Cvv-back').oninput = () => {
  document.querySelector('.cvv-box2').innerText = document.querySelector('.Cvv-back').value;
}
// the following simple code changes the back and front of the card
document.querySelector('.Cvv-back').onmouseenter = () =>{
  document.querySelector('.front-card-row').style.transform = "perspective(1000px) rotateY(-180deg)";
  document.querySelector('.back-container').style.transform = "perspective(1000px) rotateY(0deg)";
}

document.querySelector('.Cvv-back').onmouseleave = () =>{
  document.querySelector('.front-card-row').style.transform = "perspective(1000px) rotateY(0deg)";
  document.querySelector('.back-container').style.transform = "perspective(1000px) rotateY(180deg)";
}


