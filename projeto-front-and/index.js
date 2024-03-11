import { areaQuadrado, perimetro } from "./areaQuadrado"



//Arrow Function 
// function UpperName (name) {
//     console.log(name.toUpperCase());
// }


// const LowerName = (name) => {
//     console.log(name.toLowerCase())
// } 
// LowerName("não aguento maiss")
// UpperName("fugir")


// const ConteQuatidadeStringName = (name) => {
//     console.log(name.length)
// }
// ConteQuatidadeStringName("endoidar")

// const MouseClick = (event) =>{
//     const clientX = event.clientX
//     const clientY = event.clientY
//     console.log (clientX, clientY)
// }
// //const MouseDown = (event) => {
//     const {clientX, clientY} = event;
//     console.log(clientX, clientY)
// }
// const HandleMouse = (clientX)
// document.documentElement.addEventListener
// (`mousedown`, MouseDown);//
// //Arrays

// const cursos = ['informatica', 'Eletrotécnica', 'Petroquímica', 'moda']
// const [curso1, curso2] = cursos 

// console.log(curso1)


// Spread (espalhamento)
const numeros = [1, 20, 3, 53, 9, 22, 13, 7]
console.log(Math.max(...numeros)) //para espalhar os numeros do array e conseguir acessar 

const frutas = ['pera', 'mamao', 'maça']
const outrasFrutas = ['banana', 'Jabuticaba', 'Romã', ...frutas]

console.log(outrasFrutas)

const meusIrmaos = ['Gabriel', 'Rayane']
const outrasIrmaos = ['Lucas', 'Karine']

const todosIrmaos = [...meusIrmaos, ...outrasIrmaos, 'Luana', 'Jezabel ']

const showList = (empresa, clientes) => {
    clientes.forEach(cliente => {
        console.log (empresa, cliente)
    });
}

showList(['SENAI', 'igor', 'carlos', 'leticia'])


//fetch
//('https://api.disneyapi.dev/')


 const fetchUrl = async (url) => {
 const response = await fetch(url)
  const json =  await response.json()
  return json
 }

 console.log(fetchUrl ('https://api.disneyapi.dev/'))
//  .then((response) =>{
// console.log(response.json ())
// })

// .then((rua) => {

// console.log()

// })
