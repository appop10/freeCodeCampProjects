window.addEventListener('DOMContentLoaded', () => {
    const palindromeInput = document.querySelector('#text-input');
    const palindromeButton = document.querySelector('#check-btn');
    const palindromeResultEl = document.querySelector('#result');

    palindromeButton.addEventListener('click', () => {
        const inputValue = palindromeInput.value;

        if (inputValue === '') {
            alert('Please input a value');
        } else {
            const isPalindrome = checkPalindrome(inputValue);

            if (isPalindrome) {
                palindromeResultEl.innerText = `${inputValue} is a palindrome`;
            } else {
                palindromeResultEl.innerText = `${inputValue} is not a palindrome`;
            }
        }
    });
});

function checkPalindrome(input) {
    const reversedStr = input.split('').reverse().join('');

    return input === reversedStr ? true : false;
}