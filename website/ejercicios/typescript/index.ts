// Boolean 
let muted: boolean = true;
muted = false

// Números
let numerador: number = 42
let denominador: number = 6
let resultado = numerador / denominador

// String
let nombre: string = 'Daniel'
let saludo = `Me llamo ${nombre}`

// Arreglos
let people: string[] = []
people = ['Isabel', 'Nicole', 'Raúl']
// people.push("9000")

let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push('Nicole')
peopleAndNumbers.push(9001)

//Enum
enum Color {
    Rojo  = 'Rojo', 
    Verde = 'Verde',
    Azul = 'Azul',
    Amarillo = 'Amarillo'
}

let colorFavorito: Color = Color.Amarillo
console.log(`Mi color favorito es ${colorFavorito}`)

// Any
let comodin: any = 'Joker'
comodin = { type: 'Wildcard'}

//Object
let someObject: object = { type: 'Wildcard'}

// Funciones
function add(a: number, b: number): number {
    return a + b
}

const sum = add(4, 6)

// Interfaces
interface Rectangulo {
    ancho: number
    alto: number
    color?: Color   // opcional
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Azul
}

function area(r: Rectangulo): number {
    return r.alto * r.ancho
}

const areaRect = area(rect)
console.log(areaRect)

rect.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectángulo`
}