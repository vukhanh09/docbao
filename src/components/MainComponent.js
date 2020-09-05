import React from 'react';
import { Component } from 'react';
import {PRODUCTS} from '../Papers/Product'
import Header from './Header'
import Footer from './Footer'
import Login from '../login/login'
import SignUp from '../login/signup'
import Menu from './MenuComponent'
import PaperDetails from './PaperDetail.js'
import { Switch, Route, Redirect, Router } from 'react-router-dom';
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            products:PRODUCTS
        }
    }
    render(){
        const PaperWithName =({match}) =>{
            return(
                <PaperDetails paper={this.state.products.filter((list)=>list.id === match.params.paperName)[0]}/>
            )
        }
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path='/mobile' exact component={()=><Menu papers={this.state.products}/>}/>
                    <Route path='/:paperName'  component={PaperWithName}/>
                    <Redirect to='/' />
                </Switch>
                <Footer/>
            </div>
        )
    }
}
export default Main;