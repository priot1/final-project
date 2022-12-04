function validateEmail(email) {    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    return re.test(String(email).toLowerCase());}

document.querySelector('button').addEventListener('click', myClick)

function myClick() {
    let result = '';
    let result2 = '';
    let result3 = '';
    let result4 = '';

    let error1 = 'false';
    let error2 = 'false';
    let error3 = 'false';
    let email = document.querySelector('.main-form__input-first');
    let password = document.querySelector('.main-form__input-second');
    let password2 = document.querySelector('.main-form__input-third');
   let radio = document.querySelector('.main-form__radio');
    let textarea = document.querySelector('.main-form__textarea');
    let checkbox = document.querySelector('.main-form__checkbox');
    let main_result = document.querySelector('.main-form-email__error');
    let main_result2 = document.querySelector('.main-form-password__error');
    let main_result3 = document.querySelector('.main-form-password-replay__error');

   const data = {
        email: email.value,
        password: password.value,
        password2: password2.value,
        radio: radio.value,
        textarea: textarea.value,
        checkbox: checkbox.value,
    };

    if ( email.value.trim() === '') {
                            result = 'Поле обязательно для заполнения';

        error1 = 'true';





        email.placeholder="Введите email";
          email.style.Color ="#CCCCCC";

        email.style.borderColor ="red";



    } else if (!validateEmail(email.value))
        {
            result = 'Email введён не корректно';
            email.style.borderColor ="#EE2424";
            error1 = 'true';



        }else {
        email.style.borderColor ="black";
        error1 = 'false';

    }
    if ( password.value.trim() === '') {
        result2 = 'Поле обязательно для заполнения';
        password.style.borderColor = "#EE2424";
        error2 = 'true';

    } else if (password.value.length > 0 && password.value.length < 8) {
        result2 = 'Длинна пароля должна быть больше 8 символов';
        password.style.borderColor = "#EE2424";
        error2 = 'true';

    }
    else {
        password.style.borderColor ="black";
        error2 = 'false';

    }
    if (password.value!==password2.value) {
        result3 = 'Пароли не совпадают';
        password2.style.borderColor = "#EE2424";
        error3 = 'true';

    }
    else {
        password2.style.borderColor ="black";
        error3 = 'false';

    }



    main_result.innerHTML = result;
       /* main_result2.innerHTML = result4;*/
    main_result2.innerHTML = result2;

        main_result3.innerHTML = result3;

    if(       error1 === 'false'  &&       error2 === 'false' &&  error3 === 'false')

{
        console.log(data);
    }
}