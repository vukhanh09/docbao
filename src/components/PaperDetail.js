import React,{Component} from 'react'
import { Card, CardImg, CardImgOverlay,
    CardTitle ,CardText,CardBody,Col,Row} from 'reactstrap';
import Comments from './Comments'

export default class Paper extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const papers = this.props.paper;
        return (
            <div>
                <div className='container'>
                <Row>
                <Col sm={3}>
                <Card>
                <CardImg width="" src={papers.imageUrl} alt={papers.name} />
                <CardBody>
                    <CardTitle>{papers.name}</CardTitle>
                    <CardText>{papers.description}</CardText>
                    </CardBody>
                </Card>
                </Col>
                <div><h3>{papers.name}</h3>
                <br></br>
                <h1>lsmcskalcsakcnsakcnsk</h1>
                <br></br>
                <h3>{papers.name}</h3>
                <br></br>
                <h1>lsmcskalcsakcnsakcnsk</h1>
                <br></br>
                <h3>{papers.name}</h3>
                <br></br>
                <h1>lsmcskalcsakcnsakcnsk</h1>
                <br></br>
                <h3>{papers.name}</h3>
                <br></br>
                <h1>lsmcskalcsakcnsakcnsk</h1>
                <br></br>
                <h3>{papers.name}</h3>
                <br></br>
                <h1>lsmcskalcsakcnsakcnsk</h1>
                <br></br></div>
                </Row>
            </div>
            <div>
            <h3>ksadmsa</h3>
                <Comments/>
            </div>
            </div>
        )
    }
}