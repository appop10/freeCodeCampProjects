window.addEventListener('DOMContentLoaded', () => {
    const palindromeInput = document.querySelector('#text-input');
    const palindromeButton = document.querySelector('#check-btn');
    const palindromeResultEl = document.querySelector('#result');

    palindromeButton.addEventListener('click', () => {
        if (palindromeInput.value === '') {
            alert('Please input a value');
        }
    });
});