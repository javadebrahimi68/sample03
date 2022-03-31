import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const BookDetails = () => {
    let location = useLocation();
    console.log(location);
    const params = useParams();
    return (
        <>
            <div>sadsd</div>

            id={params.id}
            {/* <div>bookDetails:  {location.search}</div> */}
            
            <div>params:  {params}</div>
        </>
    )
}
export default BookDetails;