import {configureStore} from '@reduxjs/toolkit'
import CartReducer from './StudentSlice'
export default configureStore({
    reducer : {
       carts : CartReducer
    }
})

