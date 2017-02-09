import React from 'react';
import ReactDOM from 'react-dom';

class MainComponent extends React.Component {
    constructor() {
        super();
    }

    triggerSearch() {
        {this.props.search(document.getElementById('city').value, document.getElementById('cuisine').value)}
    }

    render() {
        return (
            <div>
                <input type="text" id="city" placeholder="Enter city"/>
                <input type="text" id="cuisine" placeholder="Enter cuisines"/>
                <button onClick={this.triggerSearch.bind(this)}>Search</button>
            </div>
        );
    }
}

export default MainComponent;
