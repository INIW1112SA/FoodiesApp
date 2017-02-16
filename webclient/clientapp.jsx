const React = require('react');
const ReactDOM = require('react-dom');
const {browserHistory, Route, Router, IndexRoute} = require('react-router');

const NavBar = require('./components/NavBar');
const Login = require('./components/sample/login.jsx');
const Home = require('./components/clientapp.jsx');
const Favourites = require('./components/sample/favourites.jsx');

const MainComp = React.createClass({
    render() {
        return (
            <div>
                <NavBar/>
                <br/><br/><br/><br/> {this.props.children}
            </div>
        );
    }
});

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path='/' component={Login}/>
    <Route component={MainComp}>
        <Route path='/home' component={Home}/>
        <Route path="/favourites" component={Favourites}/> {/* <Route path="/gmailbox" component={GmailBox}/> */}
    </Route>
</Router>, document.getElementById('mountapp'));
