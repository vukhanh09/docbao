import React,{Component ,useState} from 'react';
import {Col,Row} from 'reactstrap'
import '../Css/Comments.css'
export default class Comments extends Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            arrayComment:['heell','kdns']
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        this.setState({
            arrayComment:this.state.arrayComment.push(this.state.value)
        })
        console.log(this.state.arrayComment)
      }


    render(){
        return(
            <div className='container'>
                <Col sm={3}>
                    <h2>Comments!</h2>
                </Col>
                <Row>
                    <Col sm={3}>
                        <img src="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?
                        cs=srgb&dl=pexels-nextvoyage-1461974.jpg&fm=jpg" height="50" width="50" alt="Customer" className='image'/>
                    </Col>

                    <div> 
                        <input type='text' onChange={this.handleChange}/>
                        <button onClick={this.handleSubmit} >Submit</button>
                        <Col>
                            <Render arrayComment={this.state.arrayComment}/>
                        </Col>
                    </div>

                </Row>
            </div>
        )
    }
}

function Render({arrayComment}){
    return(
        <div>
            {
                arrayComment.map(cmt => (
                     <li key={cmt}>{cmt}</li>))
            }
        </div>
    )
}