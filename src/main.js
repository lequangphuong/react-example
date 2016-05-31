var React = require('react');
var ReactDOM = require('react-dom');
var Page = require('./components/Page');
var Login = require('./components/Login');

var _ReactRouter = require('react-router');
var Router = _ReactRouter.Router;
var Route = _ReactRouter.Route;
var browserHistory = _ReactRouter.browserHistory;

class NoMatch extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div> no match </div>
    )
  }
}

var routes = (
  <Route path="/" component={Page}>
      <Route path="page" component={Page}/>
      <Route path="login" component={Login}/>
      <Route path="*" component={NoMatch}/>
    </Route>
);

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('main'))
