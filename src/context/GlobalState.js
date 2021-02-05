import React, {createContext, useReducer} from 'react';
import axios from 'axios';

import AppReducer from './AppReducer';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

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
            const res = await axios({
                method: 'get',
                url: '/product/index',
                params: {
                    name_order: "asc",
                    items_per_page: 10
                } 
            });
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

    async function deleteProduct(id){
        try {
            await axios.delete('/product/destroy/'+id);
            dispatch({
                type: 'DELETE_PRODUCT',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'PRODUCT_ERROR',
                payload: err.response.data.message
            }); 
        }
    }

    async function addProduct(product){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/product/store', product, config);
            dispatch({
                type: 'ADD_PRODUCT',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'PRODUCT_ERROR',
                payload: err.response.data.message
            }); 
        }
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