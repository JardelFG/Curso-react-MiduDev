import { useContext } from "react"
import { CartContext } from "../Context/cart"

export const useCart = () =>{
    const context = useContext(CartContext)

    if(context === undefined){
        throw new Error("Cart context no se puede usar sin el cartProvider")
    }

    return context
}