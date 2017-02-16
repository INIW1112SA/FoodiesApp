import React from 'react';
import ButtonComponent from './button.jsx';
import $ from 'jquery';
import {Card, Image, Input} from 'semantic-ui-react';

let textBoxStyle = {
    height: '70px'
};
let imgStyle = {
    height: '200px'
};
let textStyle = {
    color: 'green',
    fontSize: '110%'
};
let inputStyle = {
    color: 'black'
};
let cardStyle = {
    height: '500px',
    margin: '10px 10px 0 0'
}

class CardsComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: '',
            addButton: 'Add To Favourites',
            deleteButton: 'Delete',
            updateButton: 'Edit',
            deleteColor: 'white',
            updateColor: 'blue'
        };
    }
    addFavourites() {
        $.ajax({
            type: 'POST',
            url: '/restaurants/add',
            data: {
                'resid': this.props.resid,
                'name': this.props.name,
                'address': this.props.address,
                'cuisines': this.props.cuisines,
                'ratings': this.props.ratings,
                'image': this.props.image
            },
            success: function(msg) {
                // console.log(msg);

                this.setState({addButton: 'Added to Your Favourites', colorName: 'teal'});
            }.bind(this)
        });
    }
    deleteFavourites() {
        let id = this.props.id;
        console.log(id);
        $.ajax({
            type: 'DELETE',
            url: `/restaurants/delete/${id}`,
            success: function(msg) {
                // console.log('success',msg);
                this.setState({deleteButton: 'Deleted', deleteColor: 'red'});
                this.props.removefav(id);
            }.bind(this)
        });
    }
    updateFavourites() {
        let comments = this.state.comments;
        let id = this.props.id;
        $.ajax({
            type: 'PUT',
            url: `/restaurants/update/${id}`,
            data: {
                'comments': comments
            },
            success: function(msg) {
                this.update(id, comments).bind(this);
                //this.setState({updateButton: 'Edited', updateColor: 'orange'});
            }.bind(this)
        });
        this.setState({comments: ''})
    }

    update(id, comments) {
        this.props.update(id, comments);
    }

    getComments(e) {
        this.setState({comments: e.target.value});
    }
    render() {
        let fav = this.props.fav;
        let del = '';
        let find = this.props.search;
        let add = '';
        let textBox = '';
        if (find === 'search') {
            add = <ButtonComponent click={this.addFavourites.bind(this)} size='large' color={this.state.colorName || 'green'} name='heart' button={this.state.addButton}/>;
        }
        if (fav === 'favourites') {
            del = (
                <div>
                    <Input fluid type='text' onChange={this.getComments.bind(this)} placeholder={this.props.comments} value={this.state.comments}/>
                    <div className='ui two buttons'>
                        <ButtonComponent click={this.updateFavourites.bind(this)} size='small' color={this.state.updateColor || 'blue'} button={this.state.updateButton}/>
                        <ButtonComponent click={this.deleteFavourites.bind(this)} size='small' color={this.state.deleteColor || 'white'} button={this.state.deleteButton}/>
                    </div>
                </div>
            )
        }

        return (

            <Card style={cardStyle}>
                <Image style={imgStyle} src={this.props.image}/>
                <Card.Content>
                    <Card.Header>
                        {this.props.name}
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            <span style={textStyle}>Address :</span>
                            <span style={inputStyle}>{this.props.address}</span>
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        <span style={textStyle}>Cuisines :</span>
                        <span style={inputStyle}>{this.props.cuisines}</span>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <span style={textStyle}>Ratings :</span>
                    <span style={inputStyle}>{this.props.ratings}/5</span>
                </Card.Content>
                {add}
                {textBox}
                {del}
            </Card>
        );
    }
}
module.exports = CardsComponent;
