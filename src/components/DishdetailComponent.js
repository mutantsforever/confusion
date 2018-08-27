import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish({dish}) {

        // var Dishdet = this.props.selectedDish;
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments({comments}) {
        if (comments != null)
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.auhor}</p>
                                </li>
                            );
                        }
                        )}
                    </ul>
                </div>        
            );
        else
            return(
                <div></div>
            );    
    }

    const DishDetail = (props) => {

        console.log('DishDetail Component render invoked')

        if (this.props.dish !=null)
            return(
                <div class="container">
                    <div className="row">
                        {RenderDish dish={props.dish}
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>    
            )
    }  

export default Dishdetail;
