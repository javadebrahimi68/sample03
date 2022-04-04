import React from 'react'

import propTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

export const BookInfoHookForm = ({ books, editBook, removeBook }) => {
    let navigate = useNavigate();
    const showDetailsWithNavigate = (id) => navigate("/useHookFormSample/details/${id}", { state: { id: 1 } });
    const saveInLocalDb = (id) => {
        localStorage.setItem('book',JSON.stringify(books.find(c => c.id = id)));
        console.log(JSON.parse( localStorage.getItem('book')));
    }
    return (
        <div className="col-md-12 col-sm-12">
            <div className="card card-stats">
                <div className="card-body ">
                    <table className='table table-bordered table-striped'>
                        <thead className='text-primary'>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                books.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.author}</td>
                                            <td>{item.cat}</td>
                                            <td style={{}}>

                                                <button className='btn btn-success mr-1 btn-sm' onClick={() => editBook(item.id)}>      <i className="nc-icon nc-caps-small mr-1"></i>Edit</button>
                                                <button className='btn btn-danger mr-1 btn-sm' onClick={() => removeBook(item.id)}> <i className=" nc-icon nc-simple-remove mr-1"></i>Remove</button>
                                                <button className='btn btn-sm' onClick={() => saveInLocalDb(item.id)}>Save In LocalDataBase</button>
                                                <div className='mt-2'>
                                                    <Link className='btn btn-info mr-1 btn-sm' to={"/useHookFormSample/details/" + item.id}>Link</Link>
                                                    <Link className='btn btn-info mr-1 btn-sm' to={"/useHookFormSample/details?id=" + item.id}>Query String</Link>
                                                    <button className='btn btn-info mr-1 btn-sm' onClick={() => showDetailsWithNavigate(1)}>Navigate</button>
                                                </div>
                                            </td>
                                        </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
export default BookInfoHookForm;
BookInfoHookForm.propTypes = {
    books: propTypes.array,
    editBook: propTypes.func.isRequired,
    removeBook: propTypes.func.isRequired
}
