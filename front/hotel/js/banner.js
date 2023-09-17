//almancenar caja del banner es una variable
var contenedor = $('#caja');//la funcion $() es la abreviatura del metodo getElementByID

//almacenar botones
var siguiente = $('#btn-adelante');
var siguiente = $('#btn-atras');

//mover ultima imagen al primer lugar
$('#caja .section_caja:last').insertBefore('#caja .section_caja:first');
//mostrar la primera imagen con un margen de -100% hacia la izquierda
contenedor.css('margin-left','-'+ 100 +'%');

//funcion para mover las imagenes a la derecha 
function derecha(){
    contenedor.animate({
       marginleft:'-'+200+'%'
    } ,700, function(){
        $('#caja .section_caja:first').insetAfter('#caja .section_caja:last');
        contenedor.css('margin-left', '-'+100+'%');
    })
}

//funcion para mover las imagenes a la derecha 
function izquierda(){
    contenedor.animate({
       marginleft:0
    } ,700, function(){
        $('#caja .section_caja:last').insetAfter('#caja .section_caja:first');
        contenedor.css('margin-left', '-'+100+'%');
    })
}

//funcion para mover las imagenes automaticamente cada 5 segundos d derecha a izquierda
function automatico(){
    interval = setInterval(function(){
        derecha();
    }, 500);
}

//funciona para mover las imagenes a la derecha atraves de la pulsacion del boton
siguiente.on('click',function() {
    derecha();
    clearInterval(interval);
    automatico();
});

//funcion para mover las imagenes a la izquierda atraves de la pulsacion del boton
anterior.on('click',function() {
    izquierda();
    clearInterval(interval);
    automatico();
});

//ejecucion automatica
automatico();