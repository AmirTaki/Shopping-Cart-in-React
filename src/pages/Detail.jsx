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
        </div>
    )
}

export default Detail;