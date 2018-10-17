/*Esto es un archivo javascript*/
function validacion() {
    var n = document.forms['formulario']['nombre'].value;
    if (n === "") {
        alert("Ingrese el Nombre");
        return false;
    }
    var a = document.forms['formulario']['apellido'].value;
    if (a === "") {
        alert("Ingrese el Apellido");
        return false;
    }
    var e = document.forms['formulario']['edad'].value;
    if (e === "") {
        alert("Ingrese la Edad");
        return false;
    }
        var s = document.getElementsByName("sexo");
    for (var i=0;i<s.length;i++)
        {
            if(s[i].checked){
                    return true;
                }
            else if(s[i+1].checked)
                {
                    return true;
                }
            else{
                alert("Seleccionar Sexo");
                return false;
            }
        }
    
    var d = document.forms['formulario']['domicilio'].value;
    if (d===""){
        alert ("Ingrese el Domicilio");
        return false;
    }
    var n = document.getElementById("opciones").selectedIndex;
    if (n == null){
            alert("Seleccionar una Nacionalidad");
            return false;
        }
}