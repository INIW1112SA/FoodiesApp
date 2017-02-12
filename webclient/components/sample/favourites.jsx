import React from 'react';
import { Card } from 'semantic-ui-react';
import DisplayFavComponent from './displayFavourites.jsx';

class Favourites extends React.Component{
  constructor(){
    super();
    this.state = {json:[]};
  }
  componentWillMount(){
    $.ajax({
       url:'/restaurants/',
       type:'GET',
      success: function(data){
       // console.log('Successfully got json' + data);
        this.setState({json:data});
      }.bind(this),
      error: function(err){
        //console.log('error occurred on AJAX');
       // console.log(err);
      }.bind(this)
     });
  }
  render(){
    return (
      <div>
        <DisplayFavComponent fav='favourites' json={this.state.json} />
      </div>
    );
  }
}
module.exports = Favourites;
