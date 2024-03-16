import { useCartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import './ItemDetail.css'
import { useState } from "react";

const ItemDetail = ({ product }) => {

    const [tieneCantidad, actualizarCantidad] = useState(false)
    const { agregarAlCart, cartList } = useCartContext()

    function onAdd(cantidad) {
        console.log(cantidad);
        agregarAlCart({ ...product, quantity: cantidad })
        actualizarCantidad(true)

    }

    return (
        <div className="card-body-detail">
            <img src={product.img} alt="img" />
            <label>Nombre: {product.name}</label>
            <label>Price: {product.price}</label>
            <label>Stock: {product.stock}</label>
            <div className="card-submit">
                {/* <Intercambialidad/> */}
                {tieneCantidad ?
                    <>
                        <Link to='/cart'><button>Terminar Compra</button></Link>
                        <Link to='/'><button>Seguir Comprando</button></Link>
                    </>

                    :
                    <ItemCount initial={1} stock={5} onAdd={onAdd} />
                }
            </div>
        </div>
    )
}

export default ItemDetail



// initial={1} stock={5} onAdd={onAdd}