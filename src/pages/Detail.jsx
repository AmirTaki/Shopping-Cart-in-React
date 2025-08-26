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
        <>
            Detail
        </>
    )
}

export default Detail;