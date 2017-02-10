import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search1.jsx';
import Result from './result.jsx';
class ParentComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            searchResult: []
        };
    }
    getResturantDataFromZomato(city, cuisine)
    {
		 console.log(city + cuisine);

        $.ajax({

            url: 'https://developers.zomato.com/api/v2.1/cities?q='+city,
            type: 'GET',
            beforeSend: function(request) {
                request.setRequestHeader('user-key', '62db5a4e27cbb5bc9f2394d48e9265df');
            },
            success: function(data) {
              var cityId = data.location_suggestions[0].id;
                console.log('Successfully got city id from Zomato ' + cityId);

                $.ajax({

                    url: 'https://developers.zomato.com/api/v2.1/search?entity_id=' + cityId + "&entity_type=city&q=" + cuisine + "&count=20",
                    type: 'GET',
                    beforeSend: function(request) {
                        request.setRequestHeader('user-key', '62db5a4e27cbb5bc9f2394d48e9265df');
                    },
                    success: function(data) {

                        console.log('Successfully got JSON from Zomato' + data.restaurants[0].restaurant.name);

        								this.setState({searchResult: data.restaurants});


                    }.bind(this),
                    error: function(err) {
                        console.log('error occurred on AJAX');
                        console.log(err);
                    }.bind(this)
                });

            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });
    }




    render() {
        return (
            <div>
                <Search search={this.getResturantDataFromZomato.bind(this)}/>
                <Result sr = {this.state.searchResult}/>
            </div>
        );
    }
}
export default ParentComponent;
