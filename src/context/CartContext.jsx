import { useState } from "react";
import { createContext } from "react";
import { arregloProductos } from "../data/arregloProductos";

const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [productCartList, setProductCartList] = useState([]);
    const [total, setPrecioTotal] = useState(0)
    const [cantidad, setCantidadItems] = useState(0)

    const addProduct = (product) => {
        if(isInCart(product.id)){
            const indiceProducto = productCartList.findIndex(item =>item.id === product.id)
            productCartList[indiceProducto].quantity += product.quantity        
            setProductCartList(productCartList)
            getPrecioTotal(productCartList)
        }   
        else
        {
        const newList = [...productCartList, product]
        setProductCartList(newList);
        getPrecioTotal(newList)
        }         
    }

    const deleteProduct = (idProduct)=>{
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elm=>elm.id !== idProduct);
        setProductCartList(newArray);
        getPrecioTotal(newArray)
    }

    const isInCart = (idProduct) => {
        const existe = productCartList.some((product) => product.id === idProduct)
        console.log('existe producto en el carrito?', existe)
        return existe
    }
    
    const clearCartList = () =>{
        setPrecioTotal(0)
        setProductCartList([])
    }

    const getPrecioTotal= (productos) =>{
        let total = 0;
        let cantidad = 0;
        productos.forEach((item)=> {
                total += (item.precio) * (item.quantity)
                cantidad += item.quantity
            })
        setPrecioTotal(total)
        setCantidadItems(cantidad)
    }

    return(
        <CartContext.Provider value={{productCartList, addProduct,isInCart , deleteProduct, clearCartList, total , cantidad}}>
            {/* {componentes} */}
            {children}            
        </CartContext.Provider>
    )
}

export default CartContext;