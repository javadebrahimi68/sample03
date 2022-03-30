import React, { useState } from 'react';
import Helmet from 'react-helmet';
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
    const clearForm = () => {
        books.forEach(element => {
            element.editMode = false;
        });
        setBooks([...books]);
        setSelectedBook(...initialBooks);
    }
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

        const exist = books.filter(c => c.id === data.id);
        //console.log(exist);
        if (exist.length > 0 && exist[0].editMode) {
            //book find For Update
            data.editMode = false;
            const tempIndex = books.findIndex(c => c.id === data.id);
            books[tempIndex].title = data.title;
            books[tempIndex].author = data.author;
            books[tempIndex].cat = data.cat;
            books[tempIndex].editMode = false;
            setBooks([...books]);
            Swal.fire({
                position: 'top-end',
                icon: 'info',
                title: 'Edit Book Complete.',
                showConfirmButton: false,
                timer: 1000
            })
            setSelectedBook(...initialBooks);
        } else if (exist.length > 0 && !exist[0].editMode) {
            //book find But Cant Update
            // console.log('Book Cant Updated');
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'You id is Exist.',
                text: " Please Change your Id ",
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            // console.log('book Not Find');

            setBooks([...books, data]);
            // console.log('books ', books);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Add New Book Complete.',
                showConfirmButton: false,
                timer: 1500
            })
            setSelectedBook(...initialBooks);
        }


    }


    return (
        <>  
        <Helmet>

            <title>Sample Form With React-Hook-Form</title>

        </Helmet>
            <div className="row">

                <BookInfo books={books} editBook={editBook} removeBook={removeBook} />

                <EditBookHookForm book={selectedBook} clearForm={clearForm} save={save} />

            </div>
        </>
    )
}

export default BookListHookForm;