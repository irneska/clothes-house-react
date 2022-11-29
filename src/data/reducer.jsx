import { createSlice } from "@reduxjs/toolkit"


const itemSlice = createSlice({
    name: "items",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            let newItem =  { item: action.payload, sum: (parseInt( action.payload.count) * parseInt(action.payload.price))};
            let foundItem = state.cart.find((clothes) => clothes.item.name === action.payload.name);
            if(foundItem === undefined){
                state.cart.push(newItem);
                }

            else{

                foundItem.sum = parseInt(newItem.sum) + parseInt(foundItem.sum); 
                foundItem.item.count = parseInt( action.payload.count)+parseInt( foundItem.item.count);
               } 
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((clothes) => clothes.item.name !== action.payload.name)
        },
        setNewPrice(state, action) {
            let foundItem = state.cart.find((clothes) => clothes.item.name === action.payload.item.name)
            foundItem.sum = action.payload.sum; 
            foundItem.item.count = action.payload.count;
        }
    }
});

export const { addToCart, removeFromCart, setNewPrice} = itemSlice.actions;
export default itemSlice.reducer;