function mostrar()
{

	var contador=0;
	var acumulador=0;
	
	while(contador < 5) {
		contador++;
		
		var numero = prompt("Ingrese un numero");
		
		numero = parseInt(numero);
		
		acumulador += numero;

		while(isNaN(numero)) {
			
			numero = prompt("error!!!Ingrese un numero");
			numero = parseInt(numero);

		}
                                     
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN