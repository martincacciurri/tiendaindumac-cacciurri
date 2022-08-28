import imgProducto1 from '../assets/01.jpg'
import imgProducto2 from '../assets/02.jpg'
import imgProducto3 from '../assets/03.jpg'
import imgProducto4 from '../assets/04.jpg'
import imgProducto5 from '../assets/05.jpg'
import imgProducto6 from '../assets/06.jpg'
import imgProducto7 from '../assets/07.jpg'
import imgProducto8 from '../assets/08.jpg'
import imgProducto9 from '../assets/09.jpg'

const productos = [
    {
        id: 1,
        nombre: 'Taladro percutor',
        descripcion:'Con el taladro eléctrico Dowen Pagio TP13VP podrás realizar múltiples tareas en diversas superficies de un modo práctico y sencillo. Su potencia de 800 W te ofrecerá gran capacidad de perforación. Tecnología de excelencia.Su mandril de 13 mm te permitirá manipular fácilmente la herramienta de manera segura y precisa. Además, su velocidad variable ofrece una gran experiencia de uso, adaptada a tus necesidades y requerimentos. Versatilidad y eficiencia.Utilizalo para las aplicaciones que desees. Al ser percutor y destornillador podrás explotar al máximo sus funciones y obtener exactitud y calidad.',
        precio: '10000',
        img: [imgProducto1]
    },
    {
        id: 2,
        nombre: 'Soldadora',
        precio: '23000',
        img: [imgProducto2]
    },
    {
        id: 3,
        nombre: 'Llave de impacto a bateria',
        precio: '15000',
        img: [imgProducto3]
    },
    {
        id: 4,
        nombre: 'Soldadora Inverter',
        precio: '10000',
        img: [imgProducto4]
    },
    {
        id: 5,
        nombre: 'Amoladora Angular',
        precio: '10000',
        img: [imgProducto5]
    },
    {
        id: 6,
        nombre: 'Disco Multiturbo Diamantado',
        precio: '10000',
        img: [imgProducto6]
    },
    {
        id: 7,
        nombre: 'Aspiradora',
        precio: '10000',
        img: [imgProducto7]
    },
    {
        id: 8,
        nombre: 'Termo Crossmaster',
        precio: '10000',
        img: [imgProducto8]
    }
    // {
    //     id: 9,
    //     nombre: 'Pistola para pintar',
    //     precio: '10000',
    //     img: [imgProducto9]
    // }
]


const getFetch = new Promise((resolve,reject) => {
    setTimeout(()=> {
        resolve(productos)
        reject(err => console.log(err))
    },2000)
})

export default getFetch