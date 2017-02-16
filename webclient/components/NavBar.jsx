import React from 'react';
import {Menu, Button} from 'semantic-ui-react';
const {Link} = require('react-router');

class NavigationComponent extends React.Component {

    state = {
        activeItem: 'home'
    };
    handleItemClick = (e, {name}) => this.state({activeItem: name})
    onClick() {

        $.ajax({
            url: '/users/logout',
            type: 'GET',
            success: function(data) {
                if (typeof data.redirect == 'string')
                    window.location.replace(window.location.protocol + "//" + window.location.host + data.redirect);
                }
            .bind(this),
            error: function(err) {
                console.log('error in logout' + err);
            }.bind(this)
        });
    }

    render() {
        const {activeItem} = this.state;
        return (
            <div>
                <Menu pointing>
                    <Link to="/home">
                        <Menu.Item name='home' active={activeItem === 'home'} color='teal' onClick={this.handleItemClick}/>
                    </Link>
                    <Link to="/favourites">
                        <Menu.Item name='favourites' color='teal' active={activeItem === 'messages'} onClick={this.handleItemClick}/>
                    </Link>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button size='large' color='teal' onClick={this.onClick.bind(this)}>LOGOUT</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}
module.exports = NavigationComponent;
