import React from 'react';
import ReactDOM from 'react-dom';
import Child from './components/sample';

class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'keerthi'
        };
				this.onClick = this.onClick.bind(this);
    }
		onClick() {
				this.setState({name:'new Keerthi'})
		}

    render() {
        return (
            <div>
                <h1>Hello For Mountapp {this.props.name}</h1>
                <Child name={this.state.name}/>
								<button onClick = {this.onClick}>Click</button>
            </div>
        );
    }
}

ReactDOM.render(
    <MainComponent name='xyz'/>, document.getElementById('mountapp'));
