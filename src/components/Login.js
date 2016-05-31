var React = require('react');
var _ReactRouter = require('react-router');
var Link = _ReactRouter.Link;

class Login extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
      <div>Login</div>
      <Link to='/page'></Link>
      </div>
    );
  }
}

module.exports = Login;
