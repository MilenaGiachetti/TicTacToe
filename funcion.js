var contenedor = document.getElementById('contenedor');
var cuadros = [[1,2,3],
            [4,5,6],
            [7,8,9]];      
var turno = 1;  
var inicio = 1;   
var ganadorTxt = document.getElementById('ganadorTxt');
var ganadasX = document.getElementById('ganadasX');
var ganadasO = document.getElementById('ganadasO');
var btn = document.getElementById('btn');
var ptsGanadasX = 0;
var ptsGanadasO = 0;
ganadasX.innerHTML = 'Jugador X: '+ ptsGanadasX;
ganadasO.innerHTML = 'Jugador O: '+ ptsGanadasO;
if (turno%2 == 0) {
    ganadorTxt.innerHTML = 'Comienza O';
}else{
    ganadorTxt.innerHTML = 'Comienza X';
}
for(let i=0; i<3; i++) {
    cuadros[i] = [];
    for(let j=0; j<3; j++) {
        cuadraditos = document.createElement('p');
        cuadraditos.innerHTML = '';
        cuadraditos.setAttribute('class','cuadro');
        contenedor.appendChild(cuadraditos);
        cuadros[i].push(cuadraditos);
    }
}
for(i=0; i<2; i++){
    for(j=0; j<3; j++){
        cuadros[i][j].classList.add("bordeH");
    }
}
for(i=0; i<3; i++){
    for(j=1; j<3; j++){
        cuadros[i][j].classList.add("bordeV");
    }
}
btn.addEventListener('click', borrar);
function borrar(){
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            cuadros[i][j].innerHTML= '';
            cuadros[i][j].addEventListener('click', seleccionar);
        }
    }
    ganadorTxt.innerHTML = '';
    btn.innerHTML = 'RESET';
    if (inicio%2 == 0){
        turno = 2;
    }else{
        turno = 1;
    }
    if (inicio%2 == 0){
        ganadorTxt.innerHTML = 'Comienza O';
    }else{
        ganadorTxt.innerHTML = 'Comienza X';
    }
}
function frenar(){
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            cuadros[i][j].removeEventListener('click', seleccionar);
        }
    }
    btn.innerHTML = 'VOLVER A JUGAR';
}
function validador(){
    var ganador = 0;
    for(j=0; j<3; j++){
        for(i=0; i<3; i++){
            if(cuadros[i][0].innerHTML == cuadros[i][1].innerHTML && cuadros[i][1].innerHTML == cuadros[i][2].innerHTML && cuadros[i][0].innerHTML != ''){
                ganador = 1;
            }else if(cuadros[0][j].innerHTML == cuadros[1][j].innerHTML && cuadros[1][j].innerHTML == cuadros[2][j].innerHTML && cuadros[0][j].innerHTML != ''){
                ganador = 1;
            }else if(cuadros[0][0].innerHTML == cuadros[1][1].innerHTML && cuadros[1][1].innerHTML == cuadros[2][2].innerHTML && cuadros[2][2].innerHTML != ''){
                ganador = 1;
            }else if(cuadros[2][0].innerHTML == cuadros[1][1].innerHTML && cuadros[1][1].innerHTML == cuadros[0][2].innerHTML && cuadros[0][2].innerHTML != ''){
                ganador = 1;
            }
        }
    }
    if (ganador == 1){
        if (turno%2 == 0){
            ganadorTxt.innerHTML = 'El ganador es X';
            ptsGanadasX++;
            ganadasX.innerHTML = 'Jugador X: '+ ptsGanadasX;
        }else{
            ganadorTxt.innerHTML = 'El ganador es O';
            ptsGanadasO++;
            ganadasO.innerHTML = 'Jugador O: '+ ptsGanadasO;
        }
        inicio++;
        frenar();
    }
    var completo = 0;
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            if (cuadros[i][j].innerHTML !== ''){
                completo ++;
            }
        }
    }
    if (completo == 9 && ganador == 0){
        ganadorTxt.innerHTML = 'No hay ganador';
    }
}
function seleccionar (){
    if(this.innerHTML == ''){
        if (turno%2 == 0) {
            this.innerHTML = 'O';
            ganadorTxt.innerHTML = 'Es turno de X';
            turno++;
        }else{
            this.innerHTML = 'X';
            ganadorTxt.innerHTML = 'Es turno de O';
            turno++;
        }
    }
    validador();
}
for(let i=0; i<3; i++) {
    for(let j=0; j<3; j++) {
        cuadros[i][j].addEventListener('click', seleccionar);
    }
}
