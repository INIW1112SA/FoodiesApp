import React from 'react';
import DisplayFavComponent from './displayFavourites.jsx';
import $ from 'jquery';
class Favourites extends React.Component {
    constructor() {
        super();
        this.state = {
            json: []
        };
    }
    componentWillMount() {
        $.ajax({
            url: '/restaurants/',
            type: 'GET',
            success: function(data) {
                // console.log('Successfully got json' + data);
                this.setState({json: data});
            }.bind(this),
            error: function(err) {
                // console.log('error occurred on AJAX');
                // console.log(err);
            }.bind(this)
        });
    }
    removeFavCard(id) {
        let favArray = this.state.json;
        let arr = [];
        for (let obj of favArray) {
            if (obj._id !== id) {
                arr.push(obj);
            }
        }
        this.setState({json: arr});
    }

    update(id, comments) {
        let arr = this.state.json;
        for (var obj of arr) {
            if (obj._id == id) {
                obj.comments = comments;
            }
        }
        this.setState({json: arr});
    }

    render() {
        var update = this.update.bind(this);
        return (
            <div>
                <DisplayFavComponent removefav={this.removeFavCard.bind(this)} fav='favourites' json={this.state.json} update={update}/>
            </div>
        );
    }
}
module.exports = Favourites;
