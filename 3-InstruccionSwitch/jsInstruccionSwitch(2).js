function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
    case "Julio":
    case "Agosto":
    alert("Abrigate");
    break;
case "Enero":
case "Febrero":
case "Marzo":
case "Abril":
case "Mayo":
case "Junio":
alert("Falta para el invierno");
break;
default:
alert("Ya pasamos el invierno");

}

alert (mesDelAño);




}//FIN DE LA FUNCIÓN