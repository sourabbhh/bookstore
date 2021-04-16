const apiEndPoint = 'http://localhost:7070';

export const fetchBooks = () => {
    return fetch(`${apiEndPoint}/books`)
           .then (response => response.json());
}


export const updateBook = (book:any, index:any) => {
    return fetch(`${apiEndPoint}/books/${index}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(book) // body data type must match "Content-Type" header
                    })
           .then (response => response.json());
}



export const addBook = (book:any) => {
    return fetch(`${apiEndPoint}/books`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(book) // body data type must match "Content-Type" header
                    })
           .then (response => response.json());
}


export const deleteBook = (index:number)=>{
    return fetch(`${apiEndPoint}/books/${index}`,
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        }, // body data type must match "Content-Type" header
                    })
           .then (response => response.json());
}


export const addCust = (customer:any) => {
    return fetch(`${apiEndPoint}/customers`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(customer) // body data type must match "Content-Type" header
                    })
           .then (response => response.json());
}


export const fetchCusts = () => {
    return fetch(`${apiEndPoint}/customers`)
           .then (response => response.json());
}