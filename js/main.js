function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.submit-button');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        const firstName = document.querySelector('.contact__form-field-first-name').value;
        const firstNameError = document.querySelector('.contact__form-error--first-name');
        const surname = document.querySelector('.contact__form-field-surname').value;
        const lastNameError = document.querySelector('.contact__form-error--last-name');
        const tel = document.querySelector('.contact__form-field-tel').value;
        const telError = document.querySelector('.contact__form-error--tel');
        const emailError = document.querySelector('.contact__form-error--email');
        const messageError = document.querySelector('.contact__form-error--message');

        if (firstName.trim() === '') {
            firstNameError.innerHTML = 'Please enter your first name';
            firstNameError.style.display = 'block';
        } else {
            firstNameError.style.display = 'none';
        }

        

        if (surname.trim() === '') {
            lastNameError.innerHTML = 'Please enter your last name';
            lastNameError.style.display = 'block';
        } else {
            lastNameError.style.display = 'none';
        }

        
        if (tel.trim() === '') {
            telError.innerHTML = 'Please enter your telephone number';
            telError.style.display = 'block';
        } else {
            telError.style.display = 'none';
        }

        const email = document.querySelector('.contact__form-field-email').value;
        if (email.trim() === '') {
            emailError.innerHTML = 'Please enter your email address';
            emailError.style.display = 'block';
        } else if (!validateEmail(email.trim())) {
            emailError.innerHTML = 'Please ensure your email is valid';
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }

        const message = document.querySelector('.contact__form-field-message').value;

        if (message.trim() === '') {
            messageError.innerHTML = 'Please enter your message';
            messageError.style.display = 'block';
        } else {
            messageError.style.display = 'none';
        }
    });


    window.addEventListener('scroll', () => {
        const bottomOfHeader = document.querySelector('.header').getBoundingClientRect().height;
        const percentOfHeaderScroll = window.scrollY / bottomOfHeader;
        document.querySelector('.header__blurred').style.opacity = percentOfHeaderScroll * 1.5;
    });
});