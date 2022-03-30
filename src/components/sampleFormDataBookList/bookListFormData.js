import React, { useState } from 'react';
import Helmet from 'react-helmet';
import Swal from 'sweetalert2';
import { initialBooks, myBooks } from '../../services/initialData';
import BookInfo from './bookInfoFormData';
import EditBookFormData from './editBookFormData';
const BookListFormData = () => {
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
    const save = (event) => {

        event.preventDefault();
        const data = new FormData(event.target);
        var newId = parseInt(data.get('id'));
        var exist = books.filter(c => c.id === newId);
        if (exist.length === 0) {
            const values = { id: newId, title: data.get('title'), author: data.get('author'), cat: data.get('category'), editMode: false };
            var temp = books;
            temp.push(values);
            setBooks([...temp]);

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Add New Book Complete.',
                showConfirmButton: false,
                timer: 1500
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
        <><Helmet>

            <title> Form Data</title>
            <meta name="description" content="Sample Form With Form Data" />

        </Helmet>
            <div className="row">

                <BookInfo books={books} editBook={editBook} removeBook={removeBook} />

                <EditBookFormData book={selectedBook} clearForm={clearForm} save={save} />

            </div>
        </>
    )
}

export default BookListFormData;