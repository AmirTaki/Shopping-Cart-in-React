import { useParams } from "react-router-dom";
import {Products} from "../Products"
import { use, useEffect, useState } from "react";

const Detail = () => {
    const {slug} = useParams();
    const [detail, setDetail] =  useState();
    return (
        <>
            Detail
        </>
    )
}

export default Detail;