import React from 'react'
import Helmet from 'react-helmet';

export const dashboard = () => {
    return (
        <>
            <Helmet i prop-types>

                <title>Dashboard</title>
                <meta name="description" content="Sample App React Js" />
            </Helmet>
            <h1 className='text-center text-success'> <i className='nc-alert-circle-i nc-icon '></i></h1>
            <h5 className='text-center'>Wellcome to My Project.</h5>
            <p className='text-center'>This is a my abilty in React.</p>
        </>
    )
}
export default dashboard;
