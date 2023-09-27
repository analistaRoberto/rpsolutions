import { createSlice } from "@reduxjs/toolkit"; 
import { categorias } from "../../data/categorias";
import { products } from "../../data/Productos";

const homeSlice = createSlice({

    name: "home",
  

    initialState: { 
        allCategories: categorias,
        allProducts:  products,
        categoriaSelection: "",
        productFiltradosCategorias: []
    },

    reducers: {
        setCategory: (state, action) => {
            state.categoriaSelection = action.payload;

        state.productFiltradosCategorias = state.allProducts.filter((el) => el.category === state.categoriaSelection)
        },
    },
});

export const  { setCategory } = homeSlice.actions;

export default homeSlice.reducer;