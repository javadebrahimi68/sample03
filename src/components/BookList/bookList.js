import React, { useState } from 'react';
import { initialBooks, myBooks } from '../../services/initialData';
import BookInfo from './bookInfo';
import EditBook from './editBook';
const BookList = () => {
    const [selectedBook, setSelectedBook] = useState(initialBooks);

    const [books, setBooks] = useState(myBooks);
    const editBook = (id) => {
        const bookIndex = books.findIndex(c => c.id === id);
        books.forEach(element => {
            element.editMode = false;
        });
        books[bookIndex].editMode = true;
        setBooks([...books]);
        setSelectedBook(books[bookIndex]);
        //  console.log('booklist/editbook fun', selectedBook);
    };
    const clearForm = () => {

        setSelectedBook(initialBooks);
    }
    const save=()=>{
        
    }
    return (

        <div className="row">
          
                <BookInfo books={books} editBook={editBook} />

                <EditBook book={selectedBook} clearForm={clearForm} save={save} />
           
        </div>
    )
}

export default BookList;