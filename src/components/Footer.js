import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        
                    <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/mobile'>Mobile</Link></li>
                        <li><Link to='/ict'>Tin ICT</Link></li>
                        <li><Link to='/khampha'>Khám Phá</Link></li>
                        
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              62,Giải Phóng,Phương Mai,Đống Đa<br />
		              Hà Nội<br />
		              VIETNAM<br />
		              <i className="fa fa-phone fa-lg"></i>: +84 1234564<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:vxkhanh09@gmail.com">
                      vxkhanh09@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/vukhanh09"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;