const form = document.querySelector('#form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let formValido = false;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validName();
    validEmail();
    validPassword();
    samePassword();

    if (formValido) {
        form.submit();
      }
});

function occurredError (index){
    campos[index].style.borderBottomColor = '#BE4B49'
    spans[index].style.display ='block';
    formValido = false;
}

function noError (index){
    campos[index].style.borderBottomColor = '#ffffff'
    spans[index].style.display ='none';
}

function validName(){
    if(campos[0].value.length > 3){
        noError(0);
    }
    else{
        occurredError(0);
    }
}

function validEmail(){
    if(!emailRegex.test(campos[1].value)){
        occurredError(1);
    }
    else{
        noError(1);
    }
}

function validPassword(){
    if(campos[2].value.length >= 8){
        noError(2);
    }
    else{
        occurredError(2);
    }
}

function samePassword(){
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8){
        noError(3);
        formValido = true;
    }
    else{
        occurredError(3);
    }
}