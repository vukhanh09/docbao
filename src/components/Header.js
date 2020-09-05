import React, { Component } from 'react';

import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink ,Link} from 'react-router-dom';
import Login from '../login/login'

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='/image/tech.jpg' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <Link to='/home'><span className="fa fa-home fa-lg"></span> HOME</Link>
                            <Link to='/mobile'><span className="fa fa-info fa-lg"></span> MOBILE</Link>
                            <Link to='/ict'><span className="fa fa-list fa-lg"></span> TIN ICT</Link>
                            <Link to='/khampha'><span className="fa fa-address-card fa-lg"></span> KHÁM PHÁ</Link>
                            </Nav>
                        </Collapse>
                    </div>
                    <div>
                                <Link to='/login'>Login</Link><br></br>
                                <Link to='/signup'> Sign Up</Link>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Hello eveyone</h1>
                                <p>Welcome to my first project!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header