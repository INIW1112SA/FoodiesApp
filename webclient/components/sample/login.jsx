var React = require('react');
var {browserHistory} = require('react-router');
import {Button, Input} from 'semantic-ui-react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            isLoggedIn: ''
        };
    }

    handleusername(e)
    {
        this.setState({username: e.target.value});
    }
    handlePassword(e)
    {
        this.setState({password: e.target.value});
    }
    LoginUser() {
        $.ajax({
            url: 'http://localhost:8080/users/login',
            type: 'POST',
            datatype: 'JSON',
            data: {
                'username': this.state.username,
                'password': this.state.password
            },
            success: function(res) {
                console.log(res.responseText);
                browserHistory.push('/home');
            }.bind(this),
            error: function(err) {
                alert('Invalid username or password');
                console.log(err.responseText);
            }.bind(this)
        });
    }
    render() {
        var divStyle = {
            marginLeft: '33%',
            width: '33%'
        };

        var headerStyle = {
            marginTop: '15%',
            marginLeft: '33%',
            color: 'teal'
        };
        return (
            <div>
                <h1 style={headerStyle}>Login To Enjoy Your Meal!!!!!</h1>
                <div style={divStyle} className='ui form'>
                    <div className='field'>
                        <Input onChange={this.handleusername.bind(this)} placeholder="Enter User Name" type="text" autoFocus/>
                    </div>
                    <div className='field'>
                        <Input onChange={this.handlePassword.bind(this)} placeholder="Enter Password" type="password"/>
                    </div>
                    <div className='field'>
                        <Button fluid size='large' color='teal' onClick={this.LoginUser.bind(this)}>Login</Button>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Login;
