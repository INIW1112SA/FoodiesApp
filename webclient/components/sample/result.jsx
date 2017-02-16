import React from 'react';
import Cards from './cards.jsx';
import {Card} from 'semantic-ui-react';

class ResultComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        const divStyle = {
            margin: 70
        };

        let rst = this.props.sr.map(function(item) {
            return (
                <div>

                    <Cards image={item.restaurant.featured_image} name={item.restaurant.name} address={item.restaurant.location.address} cuisines={item.restaurant.cuisines} ratings={item.restaurant.user_rating.aggregate_rating} search='search'/>
                </div>
            );
        });
        return (
            <div style={divStyle}>
                <Card.Group>{rst}</Card.Group>
            </div>

        );
    }
}

export default ResultComponent;
