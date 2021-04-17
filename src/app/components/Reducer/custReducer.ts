import * as actionTypes from "../actions/typesCart";
import { stateTypeCust, CustomerDet, Customer, BookCart } from "../model/Book";



const initialState:stateTypeCust= {
    customers: [],
    customerDet: {} as CustomerDet,
    cart: [] as BookCart[], //assertion for initailizing an empty object
    customer: {
        name: '',
        address: '',
        phone: 0 ,
        id: 0,
        cart: []//map function of order details customer was showing error when initial cart was not declared, because until the customer was saved in api. so an empty cart is solving the problem
    },
}

export default function custReducer(state:stateTypeCust = initialState, action:any ): stateTypeCust{
    switch (action.type){
        case actionTypes.ADD_BOOK_CART:{
            return {...state, cart: [...state.cart, action.payload.book ] }
        }
        case actionTypes.ADD_CUSTOMER:{
            return {...state, customers: [...state.customers, action.payload.customer ], customer: action.payload.customer }
        }
        case actionTypes.INCRE_QUANTITY:{
            return {
                ...state, 
                cart: state.cart.map(//we have to just increase the quantity, rest same
                    (book) => book.id === action.payload.id ? {...book, quantity: book.quantity + 1}
                                   : book
                )
             }
        }
        case actionTypes.DECRE_QUANTITY:{
            return {
                ...state, 
                cart: state.cart.map(
                    (book) => book.id === action.payload.id ? {...book, quantity: book.quantity - 1}
                                   : book
                )
             }
        }
        
        case actionTypes.DELETE_BOOK_CART:{
            console.log('delete chla');
            return {
                ...state, 
                cart: state.cart.filter(
                    (book) => book.id != action.payload.id
                )
             }
        }


        case actionTypes.HANDLE_VALUE_CART:{
            return {
                ...state, customerDet:{...state.customerDet, ...action.payload}
             }
        }


        case actionTypes.INIT_CUSTS:{//initializing customers array state containing all customers
            return {...state, customers: action.payload.customers}
        }
        
        case actionTypes.INIT_CUST:{//initializing customer state with present customer to be edited or added
            return {...state, customer: action.payload.customer}
        }

        
        default:
        return state;
    }
}