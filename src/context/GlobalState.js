import React, {createContext, useReducer} from 'react';
import axios from 'axios';

import AppReducer from './AppReducer';

axios.defaults.baseURL = 'http://localhost:8000/api/v1';

const initialState = {
    productsList: [],
    error: null,
    loading: true
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] =useReducer(AppReducer, initialState);

    //Actions
    async function getProductsList() {
        try{
            const res = await axios.get('/product/index');
            dispatch({
                type: 'GET_PRODUCTSLIST',
                payload: res.data.data
            });
        }catch(err){
            dispatch({
                type: 'PRODUCT_ERROR',
                payload: err.response.data.message
            }); 
        }
    }

    function deleteProduct(id){
        dispatch({
            type: 'DELETE_PRODUCT',
            payload: id
        });
    }

    function addProduct(product){
        dispatch({
            type: 'ADD_PRODUCT',
            payload: product
        });
    }

    return (
        <GlobalContext.Provider value={
            {
                productsList: state.productsList,
                error: state.error,
                loading: state.loading,
                getProductsList,
                deleteProduct,
                addProduct
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}