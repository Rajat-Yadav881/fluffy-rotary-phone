const books = [
    { id: 1, bookName: 'Book 1', author: 'Author 1', price: 29.99 },
    { id: 2, bookName: 'Book 2', author: 'Author 2', price: 19.99 },
    { id: 3, bookName: 'Book 3', author: 'Author 3', price: 24.99 },
    { id: 4, bookName: 'Book 4', author: 'Author 4', price: 14.99 },
    { id: 5, bookName: 'Book 5', author: 'Author 5', price: 32.99 },
    { id: 6, bookName: 'Book 6', author: 'Author 6', price: 27.99 },
    { id: 7, bookName: 'Book 7', author: 'Author 7', price: 22.99 },
    { id: 8, bookName: 'Book 8', author: 'Author 8', price: 17.99 },
    { id: 9, bookName: 'Book 9', author: 'Author 9', price: 39.99 },
    { id: 10, bookName: 'Book 10', author: 'Author 10', price: 19.99 }
];


export const getAllBooks = (req,res)=>{
    console.log("Send Successfully!");
    const bookName = books.map(book => book.bookName);
    res.send(bookName);
}

export const addBook = (req,res)=>{
    console.log('I have connected successfully!');
    const book = req.body;
    
    if (books.some(boo => boo.id === book.id)) {
        res.status(401).json({error : "Oops! The ID is duplicate"})
    }else{
        books.push(book);
        res.send(book);
    }
};

export const deleteBook = (req,res)=>{
    const bookId = parseInt(req.params.id);
    const foundBookIndex = books.findIndex(book => book.id === bookId);
    if(foundBookIndex !== -1){
        const deleteBook = books.splice(foundBookIndex,1);
        res.send(`${deleteBook} is deleted successfully!`);
    }else{
        res.json({error : "Book has not Found!"});
    }
};
