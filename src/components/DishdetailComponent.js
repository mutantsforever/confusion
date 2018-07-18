import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        var Dishdet = this.props.selectedDish;
        return(
            <Card>
                    <CardImg width="100%" src={Dishdet.image} alt={Dishdet.name} />
                    <CardBody>
                      <CardTitle>{Dishdet.name}</CardTitle>
                      <CardText>{Dishdet.description}</CardText>
                    </CardBody>
                </Card>
        );
    }
}

export default Dishdetail;
