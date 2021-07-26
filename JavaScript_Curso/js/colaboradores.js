$(document).ready(function() {
    const APIURL = 'https://jsonplaceholder.typicode.com/posts';
    const infoPost = { foto:'<img id="partners" src="./img/socios/Geraldine.png" width="150" border="black 20 solid" />',nombre: "Geraldine Andia", profesion: "Gerente de Marketing" }
    $("#Colaboradores").prepend('<button class="btn" id="btnpartners">Nuestros Colaboradores</button>');
    $("#btnpartners").click(() => {
        $.ajax({
            method: "POST",
            url: APIURL,
            data: infoPost,
            success: function(respuesta) {
                console.log(respuesta);
                $("#Colaboradores").prepend(`<div class="box"><div>${respuesta.foto}</div><h3>${respuesta.nombre}</h3><h4>${respuesta.profesion}</h4><div class="share"><a href="#" class="redes fab fa-facebook-f"></a><a href="#" class="redes fab fa-twitter"></a></div></div>`);
            }
        });
    });
});

$(document).ready(function() {
    const APIURL = 'https://jsonplaceholder.typicode.com/posts';
    const infoPost = { foto:'<img id="partners" src="./img/socios/Diego.png" width="150" />',nombre: "Diego Principe", profesion: "Jefe de Planeación" }
    $("#btnpartners").click(() => {
        $.ajax({
            method: "POST",
            url: APIURL,
            data: infoPost,
            success: function(respuesta) {
                console.log(respuesta);
                $("#Colaboradores").prepend(`<div class="box"><div>${respuesta.foto}</div><h3>${respuesta.nombre}</h3><h4>${respuesta.profesion}</h4><div class="share"><a href="#" class="redes fab fa-facebook-f"></a><a href="#" class="redes fab fa-twitter"></a></div></div>`);
            }
        });
    });
});

$(document).ready(function() {
    const APIURL = 'https://jsonplaceholder.typicode.com/posts';
    const infoPost = { foto:'<img id="partners" src="./img/socios/Akeimi.png" width="150" />',nombre: "Akeimi Velasquez", profesion: "Jefa de Logistica" }
    $("#btnpartners").click(() => {
        $.ajax({
            method: "POST",
            url: APIURL,
            data: infoPost,
            success: function(respuesta) {
                console.log(respuesta);
                $("#Colaboradores").prepend(`<div class="box"><div>${respuesta.foto}</div><h3>${respuesta.nombre}</h3><h4>${respuesta.profesion}</h4><div class="share"><a href="#" class="redes fab fa-facebook-f"></a><a href="#" class="redes fab fa-twitter"></a></div></div>`);
            }
        });
    });
});

$(document).ready(function() {
    const APIURL = 'https://jsonplaceholder.typicode.com/posts';
    const infoPost = { foto:'<img id="partners" src="./img/socios/Leslie.png" width="150" />',nombre: "Leslie Rosas", profesion: "CEO" }
    $("#btnpartners").click(() => {
        $.ajax({
            method: "POST",
            url: APIURL,
            data: infoPost,
            success: function(respuesta) {
                console.log(respuesta);
                $("#Colaboradores").prepend(`<div class="box"><div>${respuesta.foto}</div><h3>${respuesta.nombre}</h3><h4>${respuesta.profesion}</h4><div class="share"><a href="#" class="redes fab fa-facebook-f"></a><a href="#" class="redes fab fa-twitter"></a></div></div>`);
            }
        });
    });
});


$(window).ready(function(){
	$("#btnpartners").click(function(){
		$("#btnpartners").css("display", "none");
	});
});