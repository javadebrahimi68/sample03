import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { initialBooks, myBooks } from '../../services/initialData';
import BookInfo from './bookInfoHookForm';
import EditBookHookForm from './editBookHookForm';
const BookListHookForm = () => {
    const [selectedBook, setSelectedBook] = useState(...initialBooks);
    const [books, setBooks] = useState(myBooks);

    const editBook = (id) => {
        const bookIndex = books.findIndex(c => c.id === id);
        books.forEach(element => {
            element.editMode = false;
        });
        books[bookIndex].editMode = true;
        setSelectedBook(books[bookIndex]);
        setBooks([...books]);
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
    const save = (data) => {

        var exist = books.filter(c => c.id === data.id);
        if (exist.length > 0) {
            console.log(exist);
            if (exist.editMode === true) {
                setBooks([...books.filter(c => c.id !== data.id), data]);
                Swal.fire({
                    position: 'top-end',
                    icon: 'info',
                    title: 'Edit Book Complete.',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
            else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'You id is Exist.',
                    text: " Please Change your Id ",
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
        else {
            setBooks([...books, data]);

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Add New Book Complete.',
                showConfirmButton: false,
                timer: 1500
            })
        }

    }
    const clearForm = () => {

        //  setSelectedBook(initialBooks);
        // Swal.fire({
        //     position: 'top-end',
        //     icon: 'info',
        //     title: 'Cancel Editing Form',
        //     showConfirmButton: false,
        //     timer: 1500
        // })
   
    
    }
    return (

        <div className="row">

            <BookInfo books={books} editBook={editBook} removeBook={removeBook} />

            <EditBookHookForm book={selectedBook} clearForm={clearForm} save={save} />

        </div>
    )
}

export default BookListHookForm;