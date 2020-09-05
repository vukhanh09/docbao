import React, { Component } from 'react';
import './login.css'
export default class Login extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           <div>
                <div className='login-box'>
                    <h1>Sign Up</h1>
                    <div className='textbox'>
                         <i class="fa fa-user" aria-hidden="true"></i>
                        <input type="text" placeholder="Username" />
                    </div>                    

                    <div className='textbox'>
                         <i class="fa fa-lock" aria-hidden="true"></i>
                        <input type="password" placeholder="Password" />
                    </div>

                    <div className='textbox'>
                         <i class="fa fa-lock" aria-hidden="true"></i>
                        <input type="password" placeholder="Confirm Password" />
                    </div>

                    <div className='textbox'>
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input type="text" placeholder="Full Name" />
                    </div>

                    <div className='textbox'>
                         <i class="fa fa-map-marker"></i>
                        <input type="text" placeholder="Address" />
                    </div>

                    
                    <input type="button" className="btn" value="Create Account"/>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                 </div>

                

           </div>
        )
    }
}