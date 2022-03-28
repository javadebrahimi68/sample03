

import React from 'react'



const EditBook = ({ book, clearForm, save }) => {
  
 


    return (
        <div className="col-md-6">
            <div className="card card-stats">
                <form onSubmit={save}>
                    <div className="card-body ">
                        <label htmlFor='id'>Id</label>
                        <input name='id' type='text' className='form-control' defaultValue={book.id} />

                        <label htmlFor='title'>Title</label>
                        <input name='title' type='text' className='form-control' defaultValue={book.title} />

                        <label htmlFor='author'>Author</label>
                        <input name='author' type='text' className='form-control' defaultValue={book.author} />

                        <label htmlFor='category'>Category</label>
                        <input name='category' type='text' className='form-control' defaultValue={book.cat} />
                    </div>
                    <div className='card-footer m-3'>
                        <button className='btn btn-success mr-1' type='submit'>Save</button>
                        <button className='btn btn-warning mr-1' onClick={() => clearForm()}>Cancel</button>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default EditBook;