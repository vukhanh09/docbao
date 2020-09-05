import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle ,CardText,CardBody,Col} from 'reactstrap';
import {Link} from 'react-router-dom';


    function RenderMenuItem ({paper}) {
        return (
            <Card>
                 <Link to={`/${paper.id}`}>
                <CardImg width="100%" src={paper.imageUrl} alt={paper.name} />
                <CardBody>
                    <CardTitle>{paper.name}</CardTitle>
                    <CardText>{paper.description}</CardText>
                    </CardBody>
                </Link>
            </Card>
        );
    }

    const Menu = (props) => {

        const menu = props.papers.map((paper) => {
            return (
                <Col sm={4}>
                    <RenderMenuItem paper={paper} />
                </Col>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;