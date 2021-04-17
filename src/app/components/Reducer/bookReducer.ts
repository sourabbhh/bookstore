
import * as actionTypes from "../actions/types";
import { stateType } from "../model/Book";



const initialState= {
    books: [],
    cart:[],
    book:{},
    index:-1,
}

export default function bookReducer(state:stateType = initialState, action:any): stateType{//action of type interface defined in actions is not working, can't figure out why
    switch (action.type){
        case actionTypes.ADD_BOOK:{//adding and updating in one action using if else
            if(action.payload.index!=-1){
                console.log('andr');
                return {...state, books: [...state.books.slice(0,action.payload.index),
                    action.payload.book,
                    ...state.books.slice(action.payload.index+1)]}
            }
            else
            return {...state, books: [...state.books, action.payload.book]}
        }

        case actionTypes.INIT_BOOKS:{
            return {...state, books: action.payload.books}
        }

        case actionTypes.DELETE_BOOK:{
            return {...state, books: [...state.books.slice(0,action.payload.index),
                ...state.books.slice(action.payload.index+1)]}
        }

        case actionTypes.CART_ADD_BOOK:{
            return {...state, cart: [...state.cart, action.payload.book]}
        }
        case actionTypes.CART_DELETE_BOOK:{
            return {...state, cart: [...state.cart.slice(0,action.payload.index),
                ...state.cart.slice(action.payload.index+1)]}
        }
        case actionTypes.HANDLE_VALUE:{
            return {...state, book: {...state.book, ...action.payload }}
        }
        case actionTypes.EDIT_BOOK_INIT:{//initializing the forms with the to be edited book
            return {...state, book: action.payload.book, index: action.payload.index}
        }
        
        
        default:
        return state;
    }
}