import imgProducto1 from '../assets/01.jpg'
import imgProducto2 from '../assets/02.jpg'
import imgProducto3 from '../assets/03.jpg'
import imgProducto4 from '../assets/04.jpg'
import imgProducto5 from '../assets/05.jpg'
import imgProducto6 from '../assets/06.jpg'
import imgProducto7 from '../assets/07.jpg'
import imgProducto8 from '../assets/08.jpg'

export const arregloProductos = [
    {
        id: 1,
        nombre: 'Taladro percutor',
        descripcion:'Con el taladro eléctrico Dowen Pagio TP13VP podrás realizar múltiples tareas en diversas superficies de un modo práctico y sencillo. Su potencia de 800 W te ofrecerá gran capacidad de perforación. Tecnología de excelencia.Su mandril de 13 mm te permitirá manipular fácilmente la herramienta de manera segura y precisa. Además, su velocidad variable ofrece una gran experiencia de uso, adaptada a tus necesidades y requerimentos. Versatilidad y eficiencia.Utilizalo para las aplicaciones que desees. Al ser percutor y destornillador podrás explotar al máximo sus funciones y obtener exactitud y calidad.',
        precio: '10000',
        img: [imgProducto1],
        marca: 'Dowen Pagio',
        categoria: 'taladro',
        stock:2
    },
    {
        id: 2,
        nombre: 'Soldadora',
        precio: '23000',
        img: [imgProducto2],
        marca: 'Dowen Pagio',
        categoria: 'soldadora',
        stock:9
    },
    {
        id: 3,
        nombre: 'Llave de impacto a bateria',
        precio: '15000',
        img: [imgProducto3],
        marca: 'Dowen Pagio',
        categoria: 'llave de impacto',
        stock:23
    },
    {
        id: 4,
        nombre: 'Soldadora Inverter',
        precio: '10000',
        img: [imgProducto4],
        marca: 'Dowen Pagio',
        categoria: 'soldadora',
        stock:6
    },
    {
        id: 5,
        nombre: 'Amoladora Angular',
        precio: '10000',
        img: [imgProducto5],
        marca: 'Dowen Pagio',
        categoria: 'amoladora',
        stock:10
    },
    {
        id: 6,
        nombre: 'Disco Multiturbo Diamantado',
        precio: '17000',
        img: [imgProducto6],
        marca: 'Hamilton',
        categoria: 'disco',
        stock:3
    },
    {
        id: 7,
        nombre: 'Aspiradora',
        precio: '18000',
        img: [imgProducto7],
        marca: 'Hamilton',
        categoria: 'aspiradora',
        stock:4
    },
    {
        id: 8,
        nombre: 'Termo Crossmaster',
        precio: '1900',
        img: [imgProducto8],
        marca: 'Crossmaster',
        categoria: 'termo',
        stock:6
    }
]


export const getFetch = new Promise((resolve, reject) => {
    //acciones
    let condition = true
    setTimeout(()=> {
      if(condition){
        resolve(arregloProductos)
      }else{
        reject('salio mal')
      }

    },2000)

  })