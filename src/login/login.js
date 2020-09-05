import React, { Component } from 'react';
import './login.css'
export default class Login extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(

                <div className='login-box'>
                    <h1>Login</h1>
                    <div className='textbox'>
                    <i class="fa fa-user" aria-hidden="true"></i>
                        <input type="text" placeholder="Username" />
                    </div>
                    

                    <div className='textbox'>
                    <i class="fa fa-lock" aria-hidden="true"></i>
                        <input type="password" placeholder="Password" />
                    </div>
                    
                    <input type="button" className="btn" value="Sign in"/>
                    <br></br>
                    <br></br>
                    <br></br>
                 </div>

                


        )
    }
}