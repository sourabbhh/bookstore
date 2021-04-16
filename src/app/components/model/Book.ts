export interface Book {
    name: string,
    price: number,
    pages: number ,
    author: string ,
    category: string,
    id:number
};




export interface stateType{
    books: Book[],
    cart: Book[],
    book: {},
    index: any
}


export interface BookCart {
    name: string,
    price: number,
    pages: number ,
    author: string ,
    category: string,
    id:number,
    quantity: number
};

export interface CustomerDet{
    name: string,
    address: string,
    phone: number ,
}


export interface Customer {
    name: string,
    address: string,
    phone: number ,
    id: number,
    cart: BookCart[] ,
};
 
export interface stateTypeCust{
    customers: Customer[],
    customerDet: CustomerDet,
    cart:BookCart[],
    customer: Customer,
    
}