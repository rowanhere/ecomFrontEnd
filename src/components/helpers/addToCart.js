import { useContext } from "react"
import { TriggerCart } from "../../App"

export const useAddToCart = ()=>{
    const checkCart = useContext(TriggerCart)
    const AddToCart = (id)=>{
        console.log("Added to cart", id);
        checkCart();    
    }
    return AddToCart;
}