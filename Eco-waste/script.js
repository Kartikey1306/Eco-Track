document.addEventListener('DOMContentLoaded', () => {
    const signInSection = document.getElementById('sign-in-section');
    const signUpSection = document.getElementById('sign-up-section');
    const showSignUpLink = document.getElementById('show-signup');
    const showSignInLink = document.getElementById('show-signin');

    showSignUpLink.addEventListener('click', (event) => {
        event.preventDefault();
        toggleForms(signInSection, signUpSection);
    });

    showSignInLink.addEventListener('click', (event) => {
        event.preventDefault();
        toggleForms(signUpSection, signInSection);
    });

    function toggleForms(hideSection, showSection) {
        hideSection.style.display = 'none';
        showSection.style.display = 'block';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const signUpSection = document.getElementById('sign-up-section');
    const signInSection = document.getElementById('sign-in-section');
    const showSignInLink = document.getElementById('show-signin');
    const showSignUpLink = document.getElementById('show-signup');

    showSignInLink.addEventListener('click', (event) => {
        event.preventDefault();
        toggleForms(signUpSection, signInSection);
    });

    showSignUpLink.addEventListener('click', (event) => {
        event.preventDefault();
        toggleForms(signInSection, signUpSection);
    });

    function toggleForms(hideSection, showSection) {
        hideSection.style.display = 'none';
        showSection.style.display = 'block';
    }
});
