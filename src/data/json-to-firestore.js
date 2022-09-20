const {initializeApp} = require("firebase/app");
const {getFirestore, collection, addDoc} = require("firebase/firestore");
const baseDeDatos = require("./arregloProductos");

console.log('file working');

// Initialize Cloud Firestore through Firebase
//REMPLAZAR CON LAS CONFIGURACIONES DE SUS CUENTAS DE FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyBg2smAd1X7rWEcGvjL9N_bC-P1BuoDmkY",
    authDomain: "tienda-indumac.firebaseapp.com",
    projectId: "tienda-indumac",
    storageBucket: "tienda-indumac.appspot.com",
    messagingSenderId: "478201197209",
    appId: "1:478201197209:web:d735c7fa883741d7f77e08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const queryColecction = collection(db,'items');

const callback = () =>{
    console.log('proceso completado exitosamente');
    process.exit();
}
let itemsProcessed = 0;

baseDeDatos.forEach((obj, index, array) => {
    //REMPLAZAR CON LOS NOMBRES DE SUS CAMPOS COMO ESTAN EN SU ARREGLO DE PRODUCTOS
    const newProduct = {
        nombre: obj.nombre,
        // img : (esto se toma de UrlFirestore)
        descripcion: obj.descripcion,
        precio: obj.precio,
        stock: obj.stock,
    }
    addDoc(queryColecction, newProduct)
        .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
            itemsProcessed++;
            if(itemsProcessed === array.length) {
              callback();
            }
        })
        .catch(error=> {
            console.error("Error adding document: ", error);
        })
});
