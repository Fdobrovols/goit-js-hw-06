const formRef = document.querySelector('.login-form');
const input = document.querySelectorAll('input');

const onFormSubmit = function(e)
{
    e.preventDefault();

    if ([...input].some((el) => el.value === '')) 
    {
        alert('Заповніть пусті поля');
    } 
    else 
    {
        const elements = e.currentTarget.elements;
        const email = elements.email.value;
        const password = elements.password.value;
        const formData = 
        {
            email,
            password,
        };
        console.log(formData);
        formRef.reset();
    }
};

formRef.addEventListener('submit', onFormSubmit);
