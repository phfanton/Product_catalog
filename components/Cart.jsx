import { useContext } from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import { CartContext } from "../context/CartContext";

export function Cart(){
    const { cart } = useContext(CartContext);

    return (
        <TouchableHighlight>
            <Text style={styles.cartText}>
                {cart}
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    cartText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
});