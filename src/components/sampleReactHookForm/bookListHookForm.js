import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { initialBooks, myBooks } from '../../services/initialData';
import BookInfo from './bookInfoHookForm';
import EditBookHookForm from './editBookHookForm';
const BookListHookForm = () => {
 
    const [selectedBook, setSelectedBook] = useState(initialBooks);
   
    const [books, setBooks] = useState(myBooks);

    const editBook = (id) => {
        console.log(id);
        const bookIndex = books.findIndex(c => c.id === id);
        books.forEach(element => {
            element.editMode = false;
        });
        books[bookIndex].editMode = true;
        
        setBooks([...books]);
        console.log(books);
        setSelectedBook(books[bookIndex]);
        console.log(selectedBook);
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
    const save = (data) => {
       
        var exist = books.filter(c => c.id === data.id && c.editMode===false);
        if (exist.length === 0) {
            setBooks([...books,data]);

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Add New Book Complete.',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else if(books.filter(c => c.id === data.id && c.editMode===true).length>0)
        {
            alert('Ready for save Edited');
        }
        else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'You id is Exist.',
                text:" Please Change your Id ",
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

        <div className="row">

            <BookInfo books={books} editBook={editBook} removeBook={removeBook} />

            <EditBookHookForm book={selectedBook} clearForm={clearForm} save={save} />

        </div>
    )
}

export default BookListHookForm;