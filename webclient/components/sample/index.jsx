import React from 'react';
import ReactDOM from 'react-dom';
import Child1 from './child1.jsx';
import Child2 from './child2.jsx';
class ParentComponent extends React.Component {
	constructor () {
		super();
	}

	render () {
		return (
			<div>
				<Child1 name ={this.props.name}/>
        <Child2/>

			</div>
		);
	}
}
export default ParentComponent;
