import React from 'react';
import ReactDOM from 'react-dom';
import GrandChild from './grandchild1.jsx'

class MainComponent extends React.Component {
	constructor () {
		super();
	}

	render () {
		return (
			<div>
				<h1>Hello From Child1 {this.props.name}</h1>
        <GrandChild name = {this.props.name}/>
			</div>
		);
	}
}

export default MainComponent;
