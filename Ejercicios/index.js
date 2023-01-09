
/*1) Programa una función que cuente el número de caracteres de 
una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 

function contarCaracteres(cadena = ""){
if (!cadena){
console.warn("No ingresaste ninguna cadena")

}else {
console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)
 }
}
 
contarCaracteres("Hola Mundo")*/

/*const contarCaracteres = (cadena = "") =>

(!cadena)
?console.warn("No ingresaste ninguna cadena")
:console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)

contarCaracteres("Hola Mundo")*/


/*2)Programa una función que te devuelva el texto recortado según el número
 de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

/*const cortarTexto = (cadena="", longitudCadena = undefined) =>
(!cadena)
?console.warn("No ingresaste ninguna cadena")
:(longitudCadena === undefined)
?console.warn("No ingresaste la longitud para recortar el texto")
:console.info(cadena.slice(0,longitudCadena))
cortarTexto("Hola Mundo",4)*/


/*3) Programa una función que dada una String te devuelva un Array de textos separados por 
cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */

/*const dividirTexto = (cadena="", separador = undefined) => 
(!cadena)
?console.warn("No ingresaste ninguna cadena")
:(separador === undefined)
?console.warn("No ingresaste el caracter separador")
:console.info(cadena.split(separador))

dividirTexto("hola que tal"," ")*/

/*4) Programa una función que repita un texto X veces, pe. miFuncion
('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo

const repetirTexto = (texto="",veces = undefined) => {
if(!texto) return console.warn("No ingresaste un texto")

if(veces === undefined) return console.warn ("No ingresaste el numero de veces a repetir el texto")

if(veces === 0) return console.error("El numero de veces no puede ser 0")

if(Math.sign(veces) === -1) return console.error("El numero de veces no puede ser negativo")

for (let i = 1; i <= veces.length; i++) console.info(`${texto}, ${i}`) 
    
}
repetirTexto("Hola Mundo",3)*/

/*const invertirCadena = (cadena = "") =>
(!cadena)
?console.warn("No ingresaste una cadena de texto")
:console.info(cadena.split("").reverse().join(""))

invertirCadena("Oye")

const invertirCadena = (str) =>{

let cadenaReversa = ""

for (let caracter of str ) {
  cadenaReversa = caracter + cadenaReversa
  console.log("Iterando en bucle for of", cadenaReversa)  
}
return cadenaReversa
}

console.log(invertirCadena("Melon"))*/

/*6) Programa una función para contar el número de veces que se repite una palabra en 
un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/ 

/*const contarRepeticiones = (cadena="",palabra="") =>{

if(!cadena)return console.warn("No has escrito ningun texto largo")

if(!palabra)return console.warn("No has escrito ninguna palabra")

let i = 0
contador = 0

while(i !== -1){
i = cadena.indexOf(palabra,i)
if (i !== -1){
i++
contador++    
}
}
return console.log(`se encontro ${palabra} ${contador} veces`)

}
contarRepeticiones("hola mundo mundo mundo","mundo")

"o"

/*const ej06 = (texto, palabra, palabra2) => {
  if (!texto) return console.warn("Se olvidó ingresar un texto")
  if (!palabra) return console.warn("Se olvidó ingresar la palabra que contar");
  if (!palabra2) return console.warn("Se olvidó ingresar la segunda palabra que contar")
  let total = 0
  let total2= 0
    txt = texto.split(" ");
  for (let i = 0; i < txt.length; i++) {
    if (txt[i].toLowerCase() === palabra.toLowerCase()) total++; 
    else if (txt[i].toLowerCase() === palabra2.toLowerCase()) total2++
  }
  console.log(`El total de veces que se repitió ${palabra} es ${total} y ${palabra2} se repitió ${total2} veces `);
}

ej06("el es el mas grande sabio de la historia","el","sabio",)*/



/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. 

const palindromo = (palabra ="") => {
if(!palabra) return console.warn("No igresaste ninguna palabra")

palabra = palabra.toLocaleLowerCase()
let alReves = palabra.split("").reverse().join("")

return (palabra === alReves)
?console.info(`Si es palindromo, palabra original ${palabra}, Palabra al reves ${alReves}`)
:console.info(`No es palindromo, palabra original ${palabra}, Palabra al reves ${alReves}`)
}

palindromo("ana")

/*8) Programa una función que elimine cierto patrón de caracteres de un texto 
dado, pe. miFuncion ("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarPatrones = (texto="", patron ="") => 


?(!texto) console.warn("No has escrito ningun texto")
:texto.replace(new RegExp(patron,"ig"),"")


console.log(eliminarPatrones("xyz1,xyz2","xyz"))*/

/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/ 

/*const generarAleatorio = () =>
{
  let num = Math.floor(Math.random()*100) 
  console.info(`El numero aleatorio es ${num}`)
}
setInterval(generarAleatorio,1000)*/

/*const numeroAleatorio = (min,max) => {

min = Math.ceil(min)
max = Math.floor(max)

return Math.floor(Math.random() * (1 + max - min) + min) }

console.log(numeroAleatorio(4,8))*/

/*Array que devuelve numeros aleatorios 

let array = []
usuario_in = prompt(parseInt("Escribe un numero"))

while(array.length < usuario_in){
array.push(Math.floor(Math.random()*1000))
console.log(array)
}*/

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  

const numeroCapicua = (numero = 0,capicua) => {
if(!numero) return console.warn("No ingresaste un numero")

if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un numero`)


numero = numero.toString()  
capicua = numero.split("").reverse().join("")

return(numero === capicua)
?console.info(`Si es capicua, Numero original ${numero}, Numero al reves ${capicua}`)
:console.info(`Si es capicua, Numero original ${numero}, Numero al reves ${capicua}`)
}

numeroCapicua(4004)*/

 /*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se 
define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */

/*const factorialNumero = (numero) =>{

  if (numero < 0) 
        return -1;

  else if (numero == 0) 
  return 1;

else {
  return (numero * factorialNumero(numero - 1));
}}

console.log(factorialNumero(5))*/

/*const factorial = (numero = undefined) => {
if(numero === undefined) return console.warn ("No ingresaste un numero")

if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un numero`)

if(numero === 0) return console.error("El numero no puede ser 0")

if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo")

let factorial = 1

for (let i = numero; i > 1;i--){
factorial *=i  
}

return console.info(`El factorial de ${numero} es ${factorial}`)
}

factorial(5)*/

/*12) Programa una función que determine si un número es primo (aquel que 
solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero=undefined) => {

if(numero === undefined) return console.warn ("No ingresaste un numero")

if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un numero`)
  
if(numero === 0) return console.error("El numero no puede ser 0")
  
if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo")

let esprimo = true

for(let i = 2; i < numero / 2; i++){
if (numero % i === 0){esprimo = false; break}
}

if(esprimo) console.log(`${numero} Si es un numero primo`)

else {console.log(`${numero} No Es un numero primo`)}

}

numeroPrimo(13)*/

/*13)Programa una función que determine si un número 
es par o impar, pe. miFuncion(29) devolverá Impar.*/

/*const parOimpar = (numero=undefined) => {

if(numero === undefined) return console.warn ("No ingresaste un numero")

if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un numero`)
  
if(numero === 0) return console.error("El numero no puede ser 0")
  
if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo")

if(numero %2 === 0) return console.info(`El numero ${numero} es par`)

else {numero %2 !== 0} return console.info(`El numero ${numero} es impar`)

}

parOimpar(3)*/



/*14)Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.*/

/*const convertirGrados = (grados = undefined, unidad = undefined) => {
if(grados === undefined) return console.warn("No ingresaste grados a convertir")

if(typeof grados !== "number") return console.error(`El valor "${grados}" ingresado, NO es un numero`)

if(unidad === undefined) return console.warn("No igresaste el tipo de grado a convertir")

if(typeof unidad!== "string") return console.warn(`El valor "${unidad}" ingresado, NO es una cadena de texto`)

if (unidad.length !== 1 ||!/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido")

if(unidad === "C") {
  return console.info(`${grados}°C = ${Math.round((grados*(9/5))) + 32}°F`)
}else if (unidad === "F"){
  return console.info(`${grados}°F = ${Math.round((grados-32)*(5/9)) + 32}°C`)
}


}

convertirGrados(20,"C")*/

/*15) Programa una función para convertir números de base binaria a 
decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {

if(numero === undefined) return console.warn ("No ingresaste un numero")

if(base === undefined) return console.warn ("No ingresaste la base a convertir")

if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un numero`)
   
if(typeof base !== "number") return console.error(`El valor "${base}" ingresado, NO es un numero`)

if(numero === 0) return console.error("El numero no puede ser 0")
    
if (base === 2 ) return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`)  

else if(base === 10) return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`)

else ((base !==/(2|10)/.test(base))) ;return console.info(`El tipo de base a convertir NO es valido`)

}

convertirBinarioDecimal(10010,2)*/

/*16)Programa una función que devuelva el monto final después de aplicar 
un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const devolverMonto = (monto = undefined , descuento = undefined) => {

if(monto === undefined) return console.warn ("No ingresaste ningun monto")

if(descuento === undefined) return console.warn ("No ingresaste ningun descuento")
  
if(typeof monto !== "number") return console.error(`El valor "${monto}" ingresado, NO es un numero`)
     
if(typeof descuento !== "number") return console.error(`El valor "${descuento}" ingresado, NO es un numero`)
  
if(monto === 0) return console.error("El numero no puede ser 0")

if(Math.sign(monto) === -1) return console.error("El numero no puede ser negativo")

if(Math.sign(descuento) === -1) return console.error("El numero no puede ser negativo")

return console.info(`$${monto} - ${descuento}% = $${(monto * descuento)/100}`)

}
devolverMonto(1000,50)*/

/*17)Programa una función que dada una fecha válida determine cuantos años han pasado 
hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const calcularYears = (fecha = undefined) => {

if (fecha === undefined) return console.warn ("No ingresaste la fecha")

if (!(Fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha valida")

let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
yearsEnMS = 1000 * 60 * 60 * 24 * 365
yearsHumanos = Math.floor(hoyMenosFecha / yearsEnMS)

return (Math.sign(yearsHumanos) === -1)
? console.info(`Faltan ${Math.abs(yearsHumanos)} años para el ${fecha.getFullYear()}.`)
: (Math.sign(yearsHumanos) === 1)
? console.info(`Han pasado ${yearsHumanos} años, desde ${fecha.getFullYear()}.`)
: console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
}
calcularYears(new Date(2001,4,23))*/

/*18)Programa una función que dada una cadena de texto cuente el número de vocales 
y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

/*const contarVocalesyConsonantes = (cadena="",vocales=0,consonantes=0) => {

cadena = cadena.toLocaleLowerCase()

for (let i = 0; i <cadena.length; i++) {  
if(cadena[i].charAt() === "a" || cadena[i].charAt() === "e" || cadena[i].charAt() === "i" || 
 cadena[i].charAt() === "o" || cadena[i].charAt() === "u") vocales++;
console.log(`Hay ${vocales} vocales`) 
}

} 
contarVocalesyConsonantes("mala")*/

/*const contarLetras = (cadena="") => {
if(!cadena) return console.warn("No ingresaste una cadena de texto")

if (typeof cadena!== "string") return console.error(`El valor "${cadena}" ingresado, NO es una
cadena de texto`)

let vocales = 0,
consonantes = 0

cadena = cadena.toLocaleLowerCase()

for (let letra of cadena){
if(/[aeiouáéíóú]/.test(letra)) vocales++;

if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++ ; 
}
return console.info({
cadena,
vocales,
consonantes  
 })
}
contarLetras("Julio")*/

/*19)Programa una función que valide que un texto sea un nombre 
válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/

/*const validarNombre = (nombre = "") => {
if (!nombre) return console.warn("No ingresaste un nombre")

if (typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresado, NO es una
cadena de texto`)

let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre)

return (expReg)
? console.info(`"${nombre}", es un nombre valido`)
: console.info(`"${nombre}", NO es un nombre valido`)
}

validarNombre("Julio Marichales")*/

/*20)Programa una función que valide que un texto sea un email 
válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.*/

/*const validarEmail = (email = "") => {
if(!email) return console.warn("No ingresaste un email")

if(typeof email !== "string") return console.error(`El valor "${email}" ingresado, NO es una
cadena de texto`)

let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)

return (expReg)
? console.info(`"${email}",  es un email valido`)
: console.info(`"${email}", NO es un email valido`)
}

validarEmail("jonmircha@gmail.com")*/


//Validar Patron
/*
const validarPatron = (cadena = "", patron = undefined) => {
if(!cadena) return console.warn("No ingresaste una cadena de texto a evaluar")

if (typeof cadena !== "string") return console.error(`El valor "${nombre}" ingresado, NO es una
cadena de texto`)


if (patron === undefined) return console.warn ("No ingresaste el patron a evaluar")

if (!(patron instanceof RegExp)) return console.error(`El valor "${patron}" ingresado, NO es una
expresion regular`)

let expReg = patron.test(cadena)

return(expReg)
? console.info(`"${cadena}", cumple con el patron ingresado`)
: console.info(`"${cadena}", NO cumple con el patron ingresado`)
} 

validarPatron("Hola Mundo")
validarPatron("Julio Marichales",/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g)*/


/*21) Programa una función que dado un array numérico devuelve otro array con los 
números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const devolverCuadrardos = (arr = undefined) => {
if(arr === undefined) return console.warn("No ingresaste un arreglo de numeros")

if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")

if(arr.length === 0) return console.error("El arreglo esta vacio")

for (let num of arr){
if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero`)  
}

const newArr = arr.map(el => el * el)

return console.info(`Arreglo original: ${arr},\nArreglo elevado al cuadrado: ${newArr}`)
}

devolverCuadrardos([2,4,6])*/


/*22)Programa una función que dado un array devuelva el número mas alto y el más 
bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const arrayMinMax = (arr = undefined) => {
if (arr === undefined) return console.warn("No ingresaste un arreglo de numeros")

if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")

if(arr.length === 0) return console.error("El arreglo esta vacio")

for (const num of arr) {
if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero`)  
 }

 return console.info(`Arreglo original: ${arr}\nValor mayor: ${Math.max(...arr)}\nValor menor: 
 ${Math.min(...arr)}`)
}

arrayMinMax([1, 4, 5, 99, -60])*/

/*23)Programa una función que dado un array de números devuelva 
un objeto con 2 arreglos en el primero almacena los números pares y 
en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const separarParesImpares = (arr = undefined) => {
  
if (arr === undefined) return console.warn("No ingresaste un arreglo de numeros")

if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")
  
if(arr.length === 0) return console.error("El arreglo esta vacio")
  
for (const num of arr) {
if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero`)  
 }

return console.info({
pares: arr.filter(num => num % 2 === 0), 
impares: arr.filter(num => num % 2 === 1) 
 })

}

separarParesImpares([4,3,15,18])*/

/*24)Programa una función que dado un arreglo de números devuelva un objeto con 
dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma 
descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenarArreglo = (arr = undefined) => {

return console.info({
arr,
asc:arr.map(el => el).sort(),
desc:arr.map(el => el).sort().reverse()
 })

}

ordenarArreglo([7,5,7,8,6])*/


/*25)Programa una función que dado un arreglo de elementos, elimine los duplicados, pe.
miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

//con Set
const eliminarDuplicados = (arr = undefined) => {

if (arr === undefined) return console.warn("No ingresaste un arreglo de numeros")

if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")
  
if(arr.length === 0) return console.error("El arreglo esta vacio")

if(arr.length === 1) return console.error("El arreglo debe tener al menos dos elementos")
  
for (const num of arr) {
if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero`)  
 }

let sinduplicar = [...new Set(arr)] 

return console.info(`Arreglo sin duplicar ningun elemento: ${sinduplicar}`)
}

eliminarDuplicados([1,2,2,3,4,5,6,6,7])

//Con filter

const quitarDuplicados = (arr = undefined) => {

if (arr === undefined) return console.warn("No ingresaste un arreglo de numeros")

if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")
  
if(arr.length === 0) return console.error("El arreglo esta vacio")

if(arr.length === 1) return console.error("El arreglo debe tener al menos dos elementos")

for (const num of arr) {
  if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero`)  
   }

return console.info({
original: arr,
sinDuplicados: arr.filter((value,index,self) => self.indexOf(value) === index)  
 })

}

quitarDuplicados([1,2,2,3,4,5,6,6,7])*/

/*26)Programa una función que dado un arreglo de números obtenga 
el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/

/*const promedio = (arr = undefined) => {

if (arr === undefined) return console.warn("No ingresaste un arreglo de numeros")

if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")
    
if(arr.length === 0) return console.error("El arreglo esta vacio")
    
for (const num of arr) {
if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero`)  
  }

return console.info(
 arr.reduce((total,num,index,arr) => {
 total += num
 if(index === arr.length-1){
  return `El promedio de ${arr.join(" + ")} es igual a ${total/arr.length}`
   } else {
    return total
   }

  })  
 )
}

promedio([1,2,3,4,5,6,7,8,9,0])*/

/*27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en 
IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, 
Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, 
Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/

  class Pelicula {
   constructor({id,titulo,director,estreno,pais,generos,calificacion}){
    this.id = id
    this.titulo = titulo
    this.director = director
    this.estreno = estreno
    this.pais = pais
    this.generos = generos
    this.calificacion = calificacion

    this.validarIMDB(id)
    this.validarTitulo(titulo)
    this.validarDirector(director)
    this.validarEstreno(estreno)
    this.validarPais(pais)
    this.validarGeneros(generos)
    this.validarCalificacion(calificacion)
   }

  static get listaGeneros (){
   return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", 
   "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", 
   "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport",
   "Talk-Show", "Thriller", "War", "Western"]
  }
  
  static generosAceptados(){
   return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(', ')}`)
  }

  validarCadena(propiedad,valor){
  if(!valor) return console.warn(`${propiedad} "${valor}" ingresado, NO es
  una cadena de texto`)

  if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es
  una cadena de texto` )

  return true
  }


  validarNumero(propiedad,valor){
    if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)
  
    if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, NO es
    un numero` )
  
    return true
    }

  validarLongitudCadena(propiedad,valor,longitud){
   if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el numero de
   caracteres permitidos (${longitud}).`)

   return true
  }
  
  validarArreglo(propiedad,valor){
    if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)
     
    if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, NO es un
    arreglo`)
    
    if(valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`)
    
    for (let cadena of valor) {
     if(typeof cadena !== "string") return console.error(`El valor "${valor}" ingresado, NO es
     una cadena de texto`)  
      }
   
      return true
    }

  validarIMDB (id){
   if(this.validarCadena("IMDB id", id)) 
    if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))
      return console.error(`IMDB id "${id}" no es valido, deben tener 9 caracteres, los 2 primeros
      letras minusculas, los 7 restantes numeros`)

  }
 
 validarTitulo (titulo){
  if(this.validarCadena("Titulo", titulo)) 
    this.validarLongitudCadena("Titulo", titulo, 100) 

 }

 validarDirector (director){
  if(this.validarCadena("Director", director)) 
    this.validarLongitudCadena("Director", director, 50) 

 }

 validarEstreno (estreno){
  if(this.validarNumero("Año de Estreno", estreno)) 
   if(!(/^([0-9]){4}$/.test(estreno)))
     return console.error(`Año de Estreno "${estreno}" no es valido, debe tener 4 digitos`)
 }

 validarPais(pais){
 this.validarArreglo("Pais",pais)

 }

 validarCalificacion(calificacion){
  if(this.validarNumero("Calificacion",calificacion))
    return (calificacion < 0 || calificacion > 10)
     ? console.error(`La calificacion tiene que estar en un rango entre 0 y 10`)
     : this.calificacion = calificacion.toFixed(1)  
  
   
 }

 fichaTecnica(){
  console.info(`Ficha Tecnica:\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: 
  "${this.estreno}"\nPais: "${this.pais.join("-")}"\nGeneros: "${this.generos.join(", ")}"
 \nCalificacion: "${this.calificacion}"\nIMDB Id: "${this.id}"`)


  }

  validarGeneros(generos){
  if ((this.validarArreglo("Generos",generos))){
    for (const genero of generos) {
     //console.log(genero, Pelicula.listaGeneros.includes(genero))
     if(!Pelicula.listaGeneros.includes(genero))
       console.error(`Generos(s) incorrectos "${generos.join(", ")}"`)
       //Pelicula.generosAceptados()
 

 
    }
   }
  }
 }


//Pelicula.generosAceptados()

 /*const peli = new Pelicula({
  id:"tt1234567",
  titulo: "Titulo de la Peli",
  director:"Director de la Peli",
  estreno:2002,
  pais:["Venezuela"],
  generos:["Action"],
  calificacion: 3.4
 })*/

 const misPelis = [
  {
    id:"tt0086250",
    titulo: "Scarface",
    director:"Brian De Palma",
    estreno:1980,
    pais:["United States"],
    generos:["Crime","Drama"],
    calificacion: 8.2
   },
   {
    id:"tt0068646",
    titulo: "The Godfather",
    director:"Francis Ford Coppola",
    estreno:1972,
    pais:["United States"],
    generos:["Crime","Drama"],
    calificacion: 9.2
   },
   {
    id:"tt0075314",
    titulo: "Taxi Driver",
    director:"Martin Scorsese",
    estreno:1974,
    pais:["United States"],
    generos:["Crime","Drama"],
    calificacion: 8.2
   },
 ]

 misPelis.forEach(el => new Pelicula(el).fichaTecnica())