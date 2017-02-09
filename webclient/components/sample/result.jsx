  import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './cards.jsx';
import { Card } from 'semantic-ui-react';

class ResultComponent extends React.Component {
    constructor () {
        super();
    }

    render () {
        var divStyle = {
margin: 70
};

        let list = '';
let rst = this.props.sr.map(function(item) {
        return (<Cards img = {item.restaurant.featured_image}
                                        name = {item.restaurant.name}
                                         address = {item.restaurant.location.address}
                                 cuisines = {item.restaurant.cuisines}
                                ratings = {item.restaurant.user_rating.aggregate_rating}/>);
});
return (
                <div style = {divStyle}><Card.Group>{rst}</Card.Group></div>

        );
    }
}

export default ResultComponent;
