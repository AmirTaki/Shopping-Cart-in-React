import { useParams } from "react-router-dom";
import {Products} from "../Products"

import { use, useEffect, useState } from "react";

const Detail = () => {
    const {slug} = useParams();
    const [detail, setDetail] =  useState([]);
    useEffect(() => {
        const findDetail =  Products.filter(product => product.slug === slug);

        findDetail.length > 0 ? setDetail(findDetail[0]) : window.location.href = "/"

    }, [slug])
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
                    <div className="fflex gpa-5">
                        <div className="flex gap-2 justify-center items-center">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;