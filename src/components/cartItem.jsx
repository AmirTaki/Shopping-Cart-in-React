
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
       <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">

       </div>
    )
}

export default CartItem;