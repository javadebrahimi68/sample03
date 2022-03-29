

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { initialBooks } from '../../services/initialData'



const EditBookFormData = ({ book, clearForm, save }) => {
    const [item, setItem] = useState(book);

    useEffect(() => {
        setItem(book);

        return () => {
            setItem(initialBooks);
          
        }
    }, [book])



    return (
        <div className="col-md-6">
            <div className="card card-stats">
                <form onSubmit={save} >
                    <div className="card-body ">
                        <input type='hidden' defaultValue={item.editMode} />
                        <label htmlFor='id'>Id</label>
                        <input name='id' type='text' className='form-control' defaultValue={item.id} />

                        <label htmlFor='title'>Title</label>
                        <input name='title' type='text' className='form-control' defaultValue={item.title} />

                        <label htmlFor='author'>Author</label>
                        <input name='author' type='text' className='form-control' defaultValue={item.author} />

                        <label htmlFor='category'>Category</label>
                        <input name='category' type='text' className='form-control' defaultValue={item.cat} />
                    </div>
                    <div className='card-footer m-3'>
                        <button className='btn btn-success mr-1' type='submit'>Save</button>
                        <button className='btn btn-warning mr-1' type='reset' onClick={()=>setItem(initialBooks)} >Cancel</button>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default EditBookFormData;