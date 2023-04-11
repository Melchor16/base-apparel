const d = document, w = window;
let $error_message = d.getElementById('error-message'),
$error_icon = d.getElementById('error-icon'),
$success_message = d.getElementById('success-message'),
$submit = d.getElementById('submit'),
$email_form = d.getElementById('email-form');

$email_form.addEventListener('submit', e =>{
    e.preventDefault();
    let $email = d.getElementById('email'),
    regex = new RegExp('[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})');

    if(!regex.exec($email.value)){
        $error_icon.classList.remove('hidden')
        $error_message.classList.remove('hidden')
        $success_message.classList.add('hidden')
    }

    if(regex.exec($email.value)){
        $error_icon.classList.add('hidden')
        $error_message.classList.add('hidden')
        $success_message.classList.remove('hidden')

        $email.value = ''
    }
    
})