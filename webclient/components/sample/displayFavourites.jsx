import React from 'react';
import CardsComponent from './cards.jsx';
import {Card} from 'semantic-ui-react';

class DisplayFavComponent extends React.Component {

    constructor() {
        super();
    }

    update(id, comments) {
        this.props.update(id, comments);
    }

    render() {

        let divStyle = {
            margin: 70
        };
        let fav = this.props.fav;
        let removeFav = this.props.removefav;
        let update = this.update.bind(this);
        let JsonArray = this.props.json.map(function(item) {
            if (fav == 'favourites')
                return <CardsComponent name={item.name} id={item._id} image={item.image} address={item.address} cuisines={item.cuisines} ratings={item.ratings} comments={item.comments} fav='favourites' removefav={removeFav} update={update}/>

        });
        return (
            <div style={divStyle}>
                <Card.Group>{JsonArray}</Card.Group>
            </div>
        );
    }
}

module.exports = DisplayFavComponent;
