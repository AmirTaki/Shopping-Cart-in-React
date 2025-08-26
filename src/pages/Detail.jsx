import { useParams } from "react-router-dom";
import {Products} from "../Products"
import { useEffect } from "react";


const Detail = () => {
    const {slug} = useParams();
    return (
        <>
            Detail
        </>
    )
}

export default Detail;