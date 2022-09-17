const localStorage = window.localStorage;

function guardar(clave,valor){
    localStorage.setItem(clave,valor)
}

function obtener(clave){
    return localStorage.getItem(clave)
}

function limpiar(){
    localStorage.clear()
}

function eliminarElemento(clave){
    localStorage.removeItem(clave)
}