const emailInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');
const button = document.querySelector('.bnt');

function moveButtonBelowPassword() {
    const rect = passwordInput.getBoundingClientRect();
    button.style.position = 'absolute';
    button.style.top = `${rect.bottom + window.scrollY + 70}px`; // 10px below the password input field
    button.style.left = `${rect.left + window.scrollX}px`; // Align to the left of the password input field
    button.style.right = 'auto';
    button.style.marginLeft = `${rect.width - button.offsetWidth}px`; // Align the button to the right side of the input
}

emailInput.addEventListener('focus', moveButtonBelowPassword);
passwordInput.addEventListener('focus', moveButtonBelowPassword);

emailInput.addEventListener('blur', () => {
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
});

passwordInput.addEventListener('blur', () => {
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
});


