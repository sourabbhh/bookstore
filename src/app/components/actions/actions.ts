import * as actionTypes from "./types";
import * as api from "../api";
import { Action } from "redux";
import { Book } from '../model/Book';
export interface actionInterface extends Action<string>{
    payload:{
        book?:Book,
        index?:number,
        books?:Book[]
    }
}
export interface actionInputInterface extends Action<string>{
    payload:{
        [name:string]:string
    }
}





export const AddBook = (book:Book, index:number):actionInterface =>{//adding book in state 
    return{
        type:actionTypes.ADD_BOOK,
        payload:{
            book,
            index
        }
    }
}

export const DeleteBook = (index:number):actionInterface =>{//deleting book from state
        return{
        type:actionTypes.DELETE_BOOK,
        payload:{
            index
        }
    }
}


export const CartAddBook = (book:Book):actionInterface =>{//action for adding book in cart
    return{
        type:actionTypes.CART_ADD_BOOK,
        payload:{
            book
        }
    }
}

export const CartDeleteBook = (index:number):actionInterface =>{
    return{
        type:actionTypes.CART_DELETE_BOOK,
        payload:{
            index
        }
    }
}
export const HandleValue= (name:string, value:string):actionInputInterface =>{//action to handle form value 
    return{
        type: actionTypes.HANDLE_VALUE,
        payload:{
            [name]:value//using input name attribute's value as key in payload
        }
    }
}

export const EditBookInit= (book:Book, index:number):actionInterface =>{//when edit button is used in adminbook component, this action initialized form with value
    return{
        type:actionTypes.EDIT_BOOK_INIT,
        payload:{
            book,
            index
        }
    }
}

export const InitBooks= (books:Book[]):actionInterface=>{//initially init Book[] with initial value, dispached after api call
    return{
        type:actionTypes.INIT_BOOKS,
        payload:{
            books
        }
    }
}

export const InitBooksApi = () => {//making an api call to get all books and call the Initbooks action
    return (dispatch:any)=>{
        return api.fetchBooks().then((a:any[])=>{
            console.log(a);
            dispatch(InitBooks(a))
        })
    }
}


export const AddBookApi = (book:Book,id:number,index:number) => {//adding or updating book to json-server
        return (dispatch:any)=>{
            if(index==-1){//if no index, book is added
                return api.addBook(book).then((a:Book)=>{
                    console.log(a);
                    dispatch(AddBook(a,index));
                })
            }//here index is used to update state in store and book.id is used to make api calls.
            else{//if index!=-1, then book is updated at the specific book is.
                return api.updateBook(book,id).then((a:Book)=>{
                    console.log(a);
                    dispatch(AddBook(a,index));
                })
            }
        }

    
}

//here also, id for api and index for store
export const DeleteBookApi = (id:number,index:number) => {//deleting in api and calling DeleteBook action to delete from store. 
    return (dispatch:any)=>{
        return api.deleteBook(id).then((a:{})=>{
            console.log(a);
            dispatch(DeleteBook(index));
        })
    }
}

