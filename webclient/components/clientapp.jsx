import React from 'react';
import ReactDOM from 'react-dom';
import Index from './sample/index.jsx';

class MainComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Index/>
            </div>
        );
    }
}

ReactDOM.render(
    <MainComponent/>, document.getElementById('mountapp'));

module.exports = MainComponent;
