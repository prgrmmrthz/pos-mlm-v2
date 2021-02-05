const AppReducer = (state, action) => {
    switch(action.type) {
        case 'GET_PRODUCTSLIST':
            return {
                ...state,
                loading: false,
                productsList: action.payload
            }
        case 'DELETE_PRODUCT':
            return {
                ...state,
                productsList: state.productsList.filter(
                    product =>product.id !== action.payload
                )
            }
        
        case 'ADD_PRODUCT':
            return {
                ...state,
                productsList: [...state.productsList, action.payload]
            }
        case 'PRODUCT_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}

export default AppReducer;