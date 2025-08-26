
import { useEffect, useState } from "react";
import { Products } from "../Products";


const CartItem = (props) => {
    const {productId, quantity} = props.data;
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        const findDetail = Products.filter(product => product.id === productId)[0]
        setDetail(findDetail)
    }, [productId])

    
    return (
        <>
        </>
    )
}

export default CartItem;