import React, {createContext, useReducer} from 'react';

import AppReducer from './AppReducer';

const initialState = {
    productsList: [
        { id: 1, name: "a"},
        { id: 2, name: "ba"},
        { id: 3, name: "as"},
        { id: 4, name: "sd"}
    ]
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] =useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={
            {
                productsList: state.productsList
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}