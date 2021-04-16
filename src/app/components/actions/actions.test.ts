import * as actionTypes from "./types";
import  EnzymeConfig  from "../../../EnzymeConfig";
import { Book } from "../model/Book";
import * as actions from "./actions";


EnzymeConfig();
describe('actions', () => {
    const book:Book={
        name: 'string',
        price: 555,
        pages: 444 ,
        author: 'string' ,
        category: 'string',
        id:44
    };
    const books:Book[]=[{
            name: 'string',
            price: 555,
            pages: 444 ,
            author: 'string' ,
            category: 'string',
            id:44
        },
        {
            name: 'string',
            price: 555,
            pages: 444 ,
            author: 'string' ,
            category: 'string',
            id:44
        }
    ];
    const index:number= 3;



    it('Action to add book to store',()=>{
        
        const exAction:actions.actionInterface={
            type: actionTypes.ADD_BOOK,
            payload:{
                book: book,
                index: index
            }
        };
        expect(actions.AddBook(book,index)).toEqual(exAction);


    });




    it('Action to Delete book from store',()=>{
        const exAction:actions.actionInterface={
            type: actionTypes.DELETE_BOOK,
            payload:{
                index:index
            }
        };
        expect(actions.DeleteBook(index)).toEqual(exAction);


    });

    

    it('Action to Init books to store',()=>{
        
        const exAction:actions.actionInterface={
            type: actionTypes.INIT_BOOKS,
            payload:{
                books: books
            }
        };
        expect(actions.InitBooks(books)).toEqual(exAction);


    });
})
