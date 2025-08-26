import { useParams } from "react-router-dom";
import {Products} from "../Products"
import { use, useEffect, useState } from "react";

const Detail = () => {
    const {slug} = useParams();
    const [detail, setDetail] =  useState([]);
    useEffect(() => {
        const findDetail =  Products.filter(product => product.slug === slug);
        
    })
    return (
        <>
            Detail
        </>
    )
}

export default Detail;