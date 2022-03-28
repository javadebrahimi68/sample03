import React from 'react'

export const bookInfo = ({books,editBook}) => {
 
  return (
    <div className="col-md-6">
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
                                    <td>
                                        <button className='btn btn-success mr-1' onClick={()=>editBook(item.id)}>Edit</button>
                                        <button className='btn btn-danger mr-1'>Remove</button>
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
export default bookInfo;