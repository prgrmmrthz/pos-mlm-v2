import {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import customers from './reducers/customers';
import authInitialState from './initialstates/authInitialState';
import customersInitialState from './initialstates/customersInitialState';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [authState,authDispatch] = useReducer(auth, authInitialState);
    const [customersState,customersDispatch] = useReducer(customers, customersInitialState);

    return (
        <GlobalContext.Provider
            value={
                {
                    authState,
                    authDispatch,
                    customersState,
                    customersDispatch
                }
            }
        >
            {children}
        </GlobalContext.Provider>
    );
};