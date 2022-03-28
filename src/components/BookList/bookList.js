import React from 'react';
import {books} from '../../services/initialData';
import BookInfo from './bookInfo';
export const bookList = () => {
   
    return (

        <div className="row">
         <BookInfo books={books}/>

        </div>
    )
}

export default bookList;