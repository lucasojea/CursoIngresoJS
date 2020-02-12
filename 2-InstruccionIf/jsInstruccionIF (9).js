function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	var max;	
	var min;

    min = 1;
    max = 11;

	random = Math.floor(Math.random() * (max - min)) + min;
	
	console.log(random);

}//FIN DE LA FUNCIÓN