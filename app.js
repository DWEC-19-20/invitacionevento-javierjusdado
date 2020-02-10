
var nuevoInvitado = document.getElementById("guardar");
var listaInvitados = document.getElementById('invitedList');
var invitados = [];

nuevoInvitado.addEventListener('click', invitar);






function eventos() {
   
   
    let botonesEdit = document.getElementsByClassName('edit');          
    for (i = 0; i < botonesEdit.length; i++) {  
        botonesEdit[i].addEventListener('click', editarInvitado);
    }
    
    let botonesRemove = document.getElementsByClassName('remove');      
    for (i = 0; i < botonesRemove.length; i++) {
        botonesRemove[i].addEventListener('click', eliminarInvitado);
    }
    // se añade evento a checkbox
    let checks = document.getElementsByClassName('check');             
    for (i = 0; i < checks.length; i++) {
        checks[i].addEventListener('click', confirmarInvitado);
    }
}

function validarNombre(nombre) {
    
    let valida = true;
    
    if (nombre.trim() === '') {
        alert("Debe de escribir un nombre");
        valida = false;
    }
    
    let nombres = document.getElementsByTagName('span');
    for (i = 0; i < nombres.length; i++) {
        if (nombres[i].innerHTML === nombre) {
            alert(nombre + " ya ha sido invitado");
            valida = false;
            break;
        }
    }
    return valida;

}

function invitar() {
    
    let inv = true;    
    let nombre = document.getElementById("nombre").value;       
    inv = validarNombre(nombre);

    if (inv && nombre !== "") {
        crearInvitado(nombre);
        invitados.push(nombre);
    }
}

function crearInvitado(nombre) {
    
    let li = document.createElement('li');
    
    
    let span = document.createElement('span');
    span.innerHTML = nombre;
    li.appendChild(span);
    
    
    let label = document.createElement('label');
    label.innerHTML = "confirmed";
    li.appendChild(label);
   
    
    let edit = document.createElement('button');
    edit.innerHTML = "edit";
    edit.setAttribute("class", "edit");
    li.appendChild(edit);
    
    
    let remove = document.createElement('button');
    remove.innerHTML = "remove";
    remove.setAttribute("class", "remove");
    li.appendChild(remove);
    
    
    let check = document.createElement('input');
    check.setAttribute("type", "checkbox");
    check.setAttribute("class", "check");
    label.appendChild(check);

    listaInvitados.appendChild(li);

    eventos();

}

function editarInvitado(editar) {
    
    let editarLi = editar.target.parentNode;
    let nuevoNombre = prompt('Indique el nombre correcto del invitado', '');
    let valida = validarNombre(nuevoNombre);

   
    if (valida) {
        let antiguo = editarLi.childNodes[0];
        antiguo.innerHTML = nuevoNombre;
    }
}


function confirmarInvitado(evento){
    
    let verificarCheck=evento.target;

    if(verificarCheck.checked==true){
        verificarCheck.parentNode.parentNode.setAttribute("class", "responded");
        
    }else{
        verificarCheck.parentNode.parentNode.setAttribute("class", "");
        
    }   
}

function eliminarInvitado(eliminar) {
    
   
    
    
  
    
   
    let respuesta = confirm("¿Confirma que desea eliminar a este invitado?");
    if (respuesta == true) {
        listaInvitados.removeChild(eliminar.target.parentNode);
        
        invitados.splice(invitados.indexOf(nombre), 1);         
    }
}



function filtrarConfirmados(){
    
   
    let lista = document.querySelectorAll('li invitado') .getElementsByTagName('li');
    
    let check = document.getElementById('inputConfirmaciones');
    
    
    if (check.checked == true){
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].className == "") {
                lista[i].setAttribute("class","ocultado");
            }
        }
      
    } else {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].className == "ocultado") {
                lista[i].setAttribute("class","");
            }
        }
    }
}