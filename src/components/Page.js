var React = require('react');
var _ReactRouter = require('react-router');
var Link = _ReactRouter.Link;

class Page extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
      <div>Page 1</div>
      <Link to='/login'>Login</Link>
      </div>
    );
  }
}

module.exports = Page;
