var React = require('react');
var ReactDOM = require('react-dom');
var Page = require('./components/Page');
var Login = require('./components/Login');

var _ReactRouter = require('react-router');
var Router = _ReactRouter.Router;
var Route = _ReactRouter.Route;
var IndexRoute = _ReactRouter.IndexRoute;
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

ReactDOM.render((
  <Router>
    <Route path="/" component={Page}>
      <IndexRoute component={Page} />
      <Route path="page" component={Page} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
), document.getElementById('main'))


// read more https://css-tricks.com/learning-react-router/
