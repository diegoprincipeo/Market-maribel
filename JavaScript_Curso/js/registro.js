//Validacion de datos

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {

	clave: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

}

const campos = {

	clave: false,
	email: false,

}

const validarFormulario = (e) => {
	switch (e.target.name) {

		case "clave":
			validarCampo(expresiones.clave, e.target, 'clave');
			validarclave2();
		break;
		case "clave2":
			validarclave2();
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;

	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarclave2 = () => {
	const inputclave1 = document.getElementById('clave');
	const inputclave2 = document.getElementById('clave2');

	if(inputclave1.value !== inputclave2.value){
		document.getElementById(`grupo__clave2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__clave2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__clave2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__clave2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__clave2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['clave'] = false;
	} else {
		document.getElementById(`grupo__clave2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__clave2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__clave2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__clave2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__clave2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['clave'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.clave && campos.email ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});
//Validacion de datos

//Estilo Registro

$(document).ready( 
    
    setTimeout(function(){
    
    $('.content-form').css("opacity", "1");
    }, 100)
)

$('#email').on('focus', function(){
    
    $('.lbl-email').css("margin-top", "-20px");
    $('.lbl-email').css("font-size", "14px");
})

$('#email').on('focusout', function(){
    
    if($('#email').val().length < 1){
        
        $('.lbl-email').css("margin-top", "10px");
        $('.lbl-email').css("font-size", "16px");
    }else{
        $('.lbl-email').css("margin-top", "-20px");
        $('.lbl-email').css("font-size", "14px");
    }
})

$('#clave').on('focus', function(){
    
    $('.lbl-clave').css("margin-top", "20px");
    $('.lbl-clave').css("font-size", "14px");
})

$('#clave').on('focusout', function(){
    
    if($('#clave').val().length < 1){
        
        $('.lbl-clave').css("margin-top", "50px");
        $('.lbl-clave').css("font-size", "15px");
    }else{
        $('.lbl-clave').css("margin-top", "20px");
        $('.lbl-clave').css("font-size", "14px");
    }
})

$('#clave2').on('focus', function(){
    
    $('.lbl-confirm_clave').css("margin-top", "20px");
    $('.lbl-confirm_clave').css("font-size", "14px");
})

$('#clave2').on('focusout', function(){
    
    if($('#clave2').val().length < 1){
        
        $('.lbl-confirm_clave').css("margin-top", "50px");
        $('.lbl-confirm_clave').css("font-size", "15px");
    }else{
        $('.lbl-confirm_clave').css("margin-top", "20px");
        $('.lbl-confirm_clave').css("font-size", "14px");
    }
})

//Estilo Registro