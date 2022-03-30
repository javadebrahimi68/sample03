import React from 'react'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const EditBookHookForm = ({ book, clearForm, save }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: { book } });
    useEffect(() => {
        reset(book);
    }, [book])


    const prepareForeSave = (data) => {
        data.id = parseInt(data.id);
        save(data);

    }

    return (
        <div className="col-md-6">
            <div className="card card-stats">
                <form onSubmit={handleSubmit(prepareForeSave)}>
                    <div className="card-body ">
                        <input type='hidden'  {...register("editMode")} />
                        <label htmlFor='id'>Id</label>
                        <input type='number' className='form-control'  {...register("id", { required: true, maxLength: 5 })} />
                        {errors.id && errors.id.type === 'required' && <span className='text-danger'> Id Is Required</span>}
                        {errors.id && errors.id.type === 'maxLength' && <span className='text-danger'>Id Max length is 5</span>}
                        <br />
                        <label htmlFor='title' >Title</label>
                        <input type='text' className='form-control'
                            {...register("title", { required: true })} />
                        {errors.title && errors.title.type === 'required' && <span className='text-danger'>Title Is Required</span>}
                        <br />
                        <label htmlFor='author'>Author</label>
                        <input type='text' className='form-control'
                            {...register("author", { required: true })} />
                        {errors.author && errors.author.type === 'required' && <span className='text-danger'>Author Is Required</span>}
                        <br />
                        <label htmlFor='cat'>Category</label>
                        <input type='text' className='form-control'
                            {...register("cat", { required: true })} />
                        {errors.cat && errors.cat.type === 'required' && <span className='text-danger'>Category Is Required</span>}
                    </div>
                    <div className='card-footer m-3'>

                        <button className='btn btn-success mr-1' type='submit'>Save</button>
                        {/* <button className='btn btn-warning mr-1' type='reset' onClick={clearForm}
                        >Cancel</button> */}

                    </div>
                </form>
            </div>
        </div>
    )
}
export default EditBookHookForm;