

import React from 'react'
import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

import { initialBooks } from '../../services/initialData'



const EditBookHookForm = ({ book, clearForm, save }) => {
    const [item, setItem] = useState(book);
    const { register, handleSubmit, formState: { errors } } = useForm();
    // useEffect(() => {
    //     setItem(book);

    //     return () => {
    //         setItem(initialBooks);

    //     }
    // }, [])

    const prepareForeSave = (data) => {
       //data.editMode='false';
       data.id=parseInt(data.id);
       // console.log(data);
        save(data);
       
    }
   
    return (
        <div className="col-md-6">
            <div className="card card-stats">
            <form onSubmit={handleSubmit(prepareForeSave)}>
                    <div className="card-body ">
                        <input name='editMode' type='hidden' defaultValue={item.editMode} {...register("editMode")} />
                        <label htmlFor='id'>Id</label>
                        <input type='number' className='form-control' defaultValue={item.id} {...register("id", { required: true, maxLength: 5 })} />
                        {errors.id && errors.id.type === 'required' && <span className='text-danger'> Id Is Required</span>}
                        {errors.id && errors.id.type === 'maxLength' && <span className='text-danger'>Id Max length is 5</span>}
                        <br />
                        <label htmlFor='title' >Title</label>
                        <input type='text' className='form-control' defaultValue={item.title}
                            {...register("title", { required: true })} />
                        {errors.title && errors.title.type === 'required' && <span className='text-danger'>Title Is Required</span>}
                        <br />
                        <label htmlFor='author'>Author</label>
                        <input type='text' className='form-control' defaultValue={item.author}
                            {...register("author", { required: true })} />
                        {errors.author && errors.author.type === 'required' && <span className='text-danger'>Author Is Required</span>}
                        <br />
                        <label htmlFor='cat'>Category</label>
                        <input type='text' className='form-control' defaultValue={item.cat}
                            {...register("cat", { required: true })} />
                        {errors.cat && errors.cat.type === 'required' && <span className='text-danger'>Category Is Required</span>}
                    </div>
                    <div className='card-footer m-3'>

                        <button className='btn btn-success mr-1' type='submit'>Save</button>
                        <button className='btn btn-warning mr-1' type='reset' onClick={() => setItem(initialBooks)} >Cancel</button>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default EditBookHookForm;