import React, {createContext, useReducer} from 'react';
import axios from 'axios';

import AppReducer from './AppReducer';

/* import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
 */
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

const initialState = {
    productsList: [],
    errorX: null,
    loading: true
}

//const MySwal = withReactContent(Swal);

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
            //console.debug(err);
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
            /* MySwal.fire({
                didOpen: () => {
                  MySwal.clickConfirm()
                }
              }).then(() => {
                return MySwal.fire(<p>{JSON.stringify(err.response.data.errors)}</p>)
            }); */

            dispatch({
                type: 'PRODUCT_ERROR',
                payload: err.response.data.errors
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