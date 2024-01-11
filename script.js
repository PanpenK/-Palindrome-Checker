const checkButton = document.getElementById('check-btn');
const inputField = document.getElementById('text-input');
const output = document.getElementById('result');
const inputText = inputField.value;

function test() {
  const inputText = inputField.value;
  if (!inputText) {
    alert('Please input a value');
  } 
const isPalindrome = checkPalindrome(inputText);
    output.textContent = `${inputText} is ${isPalindrome ? '' : 'not '}a palindrome.`;
    output.classList.remove('hide');

}

function checkPalindrome(text) {
        const cleaned = text.toLowerCase().replace(/[\W_]/g, '');
        return cleaned === cleaned.split('').reverse().join('');
    }

checkButton.addEventListener('click', test);