const brain = require('brain.js');
const readLine = require('readline');

const config = {
	binaryThresh : 0.5,
	hiddenLayers: [3],
	activation: 'sigmod',
	leakyReluAlpha: 0.01
}

var miBrain = new brain.recurrent.LSTM();

// entrenamos a la máquina para que recoga las entradas y salidas que debe de aprender
miBrain.train([
	{input : 'Hola buenas', output : 'Hola buenas, ¿Que tal estas?'},
	{input : '¿Como te llamas?', output : 'Mi nombre es BotChat, encantado de conocerte.'},
	{input : 'Cuentame algo', output : 'No se que contarte, ¿que es lo que mas te gusta hacer en tus ratos libres?'},
	{input : 'Tengo sueño', output : 'Vete a dormir, ya es tarde, no se que haces ahí ahún.'},
	{input : 'Me encuentro mal', output : 'Si te encuentras mal, ves al médico'},
	{input : 'Estoy contento y alegre', output : 'Me encanta, yo tambien estoy bién'},
	{input : 'Necesito ayuda', output : 'Soy un chat robot, me puedes preguntar todo lo que quieras, así que adelante.'},
]);

// instanciamos el buffer de entrada de texto, para que el usuario pueda introducir un mensaje
var rl = readLine.createInterface({
	input : process.stdin,
	output: process.stdout
});


// se lanza la escucha de el teclado de entrada para recoger la respuesta del usuario
rl.question('Pregunta: ("s" para salir) ', (answer) => {
	console.log('Pregunta: ' + answer);

	const respuesta = miBrain.run(answer);
	console.log('Respuesta: ' + respuesta);

	rl.close();
});