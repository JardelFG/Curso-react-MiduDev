import { useState, useEffect } from "react"
import { getImgUrl } from "../services/imgUrl"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({ fact }){
    const [imgUrl, setImgUrl] = useState()

    const refreshImgUrl = () =>{
        getImgUrl({fact}).then((newImgUrl => setImgUrl(newImgUrl)))
    }

    useEffect(()=>{
        if(!fact) return 
        refreshImgUrl()
    },[fact])
    
    return { imgUrl:`${CAT_PREFIX_IMAGE_URL}${imgUrl}` }
}