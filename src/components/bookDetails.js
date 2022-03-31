import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const BookDetails = () => {
    let location = useLocation();
    console.log(location);
    const params = useParams();
    return (
        <>
            <div className='card'>
                <div className='card-header text-center'>Details Of Book</div>
                <div className='card-body'>
                    <h5>Book Title</h5>
                    <h6>Book Category</h6>
                    <h6>Book Author</h6>
                </div>
            </div>

            {/* id={params.id} */}
            {/* <div>bookDetails:  {location.search}</div> */}
            
            {/* <div>params:  {params}</div> */}
        </>
    )
}
export default BookDetails;