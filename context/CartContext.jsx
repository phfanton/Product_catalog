import { createContext } from "react";

export const CartContext = createContext();

export function CartProvider({children}) {
    return (
        <CartContext.Provider value={{cart: 10}}>
            {children}
        </CartContext.Provider>
    )
}