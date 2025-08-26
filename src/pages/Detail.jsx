import { useParams } from "react-router-dom";
import {Products} from "../Products"
import {  use, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";


const Detail = () => {
    const {slug} = useParams();
    const [detail, setDetail] =  useState([]);
    const [quantity, setQuantitiy] = useState(1);
    const dispath = useDispatch();

    useEffect(() => {
        const findDetail =  Products.filter(product => product.slug === slug);

        findDetail.length > 0 ? setDetail(findDetail[0]) : window.location.href = "/"

    }, [slug])
    const handleMinusQuantity = () => {
        setQuantitiy(quantity - 1 < 1 ? 1 : quantity - 1);
    }
    const handlePlusQuantity = () => {
        setQuantitiy(quantity + 1)
    }
    const handleAddToCart = () => {
        dispath(addToCart({
            productId: detail.id,
            quantity: quantity
        }))
    }
    return (

        <div>
            <h2 className="text-3xl text-center">PRODUCT DETAIL</h2>
            <div className="grid grid-cols-2 gap-5 mt-5">
                <div className="">
                    <img src={detail.image} alt="" className="w-full" />
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl uppercase font-bold">{detail.name}</h1>
                    <p className="font-bold text-3xl">
                        {detail.price}
                    </p>
                    <div className="flex gap-5">
                        <div className="flex gap-2 justify-center items-center">
                            <button onClick={handleMinusQuantity} className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center" >-</button>
                            <span className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"    >{quantity}</span>
                            <button onClick = {handlePlusQuantity} className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center" >+</button>
                        </div>
                        <button onClick={handleAddToCart} className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl">
                            Add To Cart
                        </button>
                    </div>
                    <p>
                        {detail.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Detail;