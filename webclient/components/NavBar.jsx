import React from 'React';
import {Input, Menu, Segment, Button }from 'semantic-ui-react';
var {Link} = require('react-router');

class NavigationComponent extends React.Component{

  state ={activeItem: 'home'};
  handleItemClick = (e,{name}) =>this.state({activeItem: name})


render(){
  const{activeItem} = this.state 
  return (
      <div>
        <Menu pointing>
          <Link to="/">
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          </Link>
          <Link to="/favourites">
          <Menu.Item name='favourites' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          </Link>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Button size='large' color='red'>Signup/Login</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
}
}
module.exports = NavigationComponent;