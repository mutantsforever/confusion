import React, { Component } from 'react';
import Dishdetail from './DishdetailComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component{

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log('Menu Component constructor is invoked')
    }

    componentDidMount() {
        console.log('Menu Component componentDidMount is invoked')

    } 

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        if(dish != null)
            return(
                <div>
                    <Dishdetail selectedDish={this.state.selectedDish} />
                </div>    

            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments) {
        if(comments != null)
            return(
                <div>
                    <Dishdetail selectedDish={this.state.selectedDish.comments[1]} />
                </div>    

            );
        else
            return(
                <div></div>
            );
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
                </div>
            )
        });

        const comm = this.props.dishes.id.map((comments) => {
            return (
                <div key={comments.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(comments)}>
                    
                </Card>
                </div>
            )
        });
        console.log('Menu Component render is invoked')

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
            </div>

        );
    }
}

export default Menu;
