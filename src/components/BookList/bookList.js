import React, { useState } from 'react';
import Swal from 'sweetalert2';
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
    const removeBook = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                var temp = books.filter(c => c.id !== id)
                setBooks(temp);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }
    const clearForm = () => {

        setSelectedBook(initialBooks);
        Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: 'Cancel Editing Form',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (

        <div className="row">

            <BookInfo books={books} editBook={editBook} removeBook={removeBook} />

            <EditBook book={selectedBook} clearForm={clearForm} />

        </div>
    )
}

export default BookList;