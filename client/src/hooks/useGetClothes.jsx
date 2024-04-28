import { useEffect, useState } from "react";
import { getClothes, getClothesByType } from "@/functions/clothes";
import { useSelector } from "react-redux";
import { selectSearch } from "@/redux/features/search/searchSlice";

export const useGetClothes = ({type}) => {
    const q = useSelector(selectSearch);
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
    if (q){
        const filteredClothes = clothes.filter((item) => item.name.toLowerCase().includes(q.toLowerCase()));
        return {clothes: filteredClothes, loading};
    }
    return {clothes, loading};
}