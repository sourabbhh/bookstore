import * as actionTypes from "./typesCart";
import * as api from "../api";
import { BookCart, Customer } from "../model/Book";
import { Action } from "redux";


export interface addBookAction extends Action<string>{
    payload:{
        book:BookCart,
    }
}//interfaces for action, but not working in reducer
export interface addCustAction extends Action<string>{
    payload:{
        customer:Customer,
    }
}
export const AddBookCart = (book:BookCart):addBookAction =>{
    
    return{
        type:actionTypes.ADD_BOOK_CART,
        payload:{
            book
        }
    }
}


export const AddCust = (customer:Customer):addCustAction =>{
    return{
        type:actionTypes.ADD_CUSTOMER,
        payload:{
            customer
        }
    }
}

export const IncreBook = (id:number):any =>{
    return{
        type:actionTypes.INCRE_QUANTITY,
        payload:{
            id
        }
    }
}
export const DecreBook = (id:number):any =>{
    return{
        type:actionTypes.DECRE_QUANTITY,
        payload:{
            id
        }
    }
}

export const DeleteBookCart = (id:number):any =>{
    return{
        type:actionTypes.DELETE_BOOK_CART,
        payload:{
            id
        }
    }
}

export const HandleValueCart = (name:string, value: string):any =>{
    return{
        type:actionTypes.HANDLE_VALUE_CART,
        payload:{
            [name]:value
        }
    }
}


export const AddCustApi = (customer:any) => {
    return (dispatch:any)=>{
            console.log('add cust');
            return api.addCust(customer).then((lucky:Customer)=>{//"lucky" a local variable
                console.log(lucky);
                dispatch(AddCust(lucky));
            })
        }
    }

export const InitCusts= (customers:any[])=>{
        return{
            type:actionTypes.INIT_CUSTS,
            payload:{
                customers
            }
        }
    }
    
export const InitCustsApi:any = () => {
        return (dispatch:any)=>{
            return api.fetchCusts().then((lucky:any[])=>{
                console.log(lucky);
                dispatch(InitCusts(lucky))
            })
        }
    }//initial initialization of customers from api

export const InitCust= (customer:Customer) =>{
        return{
            type:actionTypes.INIT_CUST,
            payload:{
                customer
            }
        }
    }//init cust when detailed view of order is opened from admin order
