import React from 'react';
import {Button, Input} from 'semantic-ui-react';
class SearchComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            cityName: ''
        };
        this.state = {
            cuisine: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }
    handleSubmit() {
        this.props.search(this.state.cityName, this.state.cuisine);
    }

    render() {
        let inputStyle = {
            marginRight: '10px'
        };
        let divStyle = {
            marginTop: 0,
            marginLeft: '400px'
        }
        return (
            <div style={divStyle}>

                <Input style ={inputStyle} type='text' value={this.state.cityName} name='cityName' onChange={this.handleChange} placeholder='enter city name' autoFocus/>

                <Input style={inputStyle} type='text' value={this.state.cuisine} name='cuisine' onChange={this.handleChange} placeholder='enter cuisine' autoFocus/>
                <Button style={inputStyle} size='large' color='teal' onClick={this.handleSubmit.bind(this)}>
                    SEARCH
                </Button>
            </div>
        );
    }
}

export default SearchComponent;
