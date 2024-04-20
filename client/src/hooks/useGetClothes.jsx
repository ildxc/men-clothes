import { useEffect, useState } from "react";
import { getClothes, getClothesByType } from "@/functions/clothes";

export const useGetClothes = ({type}) => {
    const [clothes, setClothes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (type){
            getClothesByType(type, setClothes);
        } else {
            getClothes(setClothes);
        }
        setLoading(false);
    }, []);
    return {clothes, loading};
}