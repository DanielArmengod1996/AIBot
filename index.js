const brain = require('brain.js');
const Koa = require('koa');
const koaRouter = require('koa-router');
const app = new Koa();

var miBrain = new brain.recurrent.LSTM();

// configuración necesaria para el entrenador de datos
const config = {
	binaryThresh : 0.5,
	hiddenLayers: [3],
	activation: 'sigmod',
	leakyReluAlpha: 0.01
}

// entrenamos a la máquina para que recoga las entradas y salidas que debe de aprender
miBrain.train([
	{input : 'Hola buenas', output : 'Hola buenas, ¿Que tal estas?'},
	{input : '¿Como te llamas?', output : 'Mi nombre es BotChat, encantado de conocerte.'},
	{input : 'Cuentame algo', output : 'No se que contarte, ¿que es lo que mas te gusta hacer en tus ratos libres?'},
	{input : 'Tengo sueño', output : 'Vete a dormir, ya es tarde, no se que haces ahí ahún.'},
	{input : 'Me encuentro mal', output : 'Si te encuentras mal, ves al médico'},
	{input : 'Estoy contento y alegre', output : 'Me encanta, yo tambien estoy bién'},
	{input : 'Necesito ayuda', output : 'Soy un chat robot, me puedes preguntar todo lo que quieras, así que adelante.'},
], config);

// podemos lanzar una prueba para ver que funciona correctamente
var output = miBrain.run(config);
console.log(output);

// a continuación esta será la parte del front end..
