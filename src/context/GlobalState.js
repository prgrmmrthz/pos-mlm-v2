import { createContext } from "react";
import React, {createContext, useReducer} from 'react';

const initialState = {
    productsList: [
        { id: 1, name: "a"},
        { id: 2, name: "ba"},
        { id: 3, name: "as"},
        { id: 4, name: "sd"}
    ]
}

export const GlobalContext = createContext