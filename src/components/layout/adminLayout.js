
import React from 'react';
import me from '../../assets/images/me.jpg';
import BookList from '../sampleFormDataBookList/bookList';

export const adminLayout = () => {
    return (
        <div className="wrapper ">
            <div className="sidebar" data-color="white" data-active-color="danger">
                <div className="logo">
                    <a href="#" className="simple-text logo-mini">
                        <div className="logo-image-small">
                            <img src={me} alt='me' style={{ borderRadius: '50%' }} />

                        </div>

                    </a>
                    <a href="#" className="simple-text logo-normal">
                        Javad Ebrahimi

                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="active ">
                            <a href="#">
                                <i className="nc-icon nc-bank"></i>
                                <p>Form Data Sample</p>
                            </a>
                        </li>


                    </ul>
                </div>
            </div>
            <div className="main-panel">

                <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
                    <div className="container-fluid">
                        <div className="navbar-wrapper">
                            <div className="navbar-toggle">
                                <button type="button" className="navbar-toggler">
                                    <span className="navbar-toggler-bar bar1"></span>
                                    <span className="navbar-toggler-bar bar2"></span>
                                    <span className="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <a className="navbar-brand" href="#">Paper Dashboard 2</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navigation">
                            <div>

                                <div className="input-group no-border">
                                    <input type="text" value="" className="form-control" onChange={() => { }} placeholder="Search..." />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <i className="nc-icon nc-zoom-split"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link btn-magnify" href="#">
                                        <i className="nc-icon nc-layout-11"></i>
                                        <p>
                                            <span className="d-lg-none d-md-block">Stats</span>
                                        </p>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link btn-rotate" href="#">
                                        <i className="nc-icon nc-settings-gear-65"></i>
                                        <p>
                                            <span className="d-lg-none d-md-block">Account</span>
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="content">
                    <BookList />
                </div>
                <footer className="footer footer-black  footer-white ">
                    <div className="container-fluid">
                        <div className="row">

                            Footer
                        </div>
                    </div>
                </footer>
            </div>
        </div>

    )
}






export default adminLayout;