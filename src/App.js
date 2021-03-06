import React from 'react';
import './stylesheets/_bootstrap.scss';
import Prefs from './prefs'

class App extends React.Component {

  render() {
    return (
<div>
  <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/">SportsBundle</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Login</a></li>
      </ul>
    </div>
  </div>
  </nav>

<div className="container-fluid">
  <Prefs />
</div>
</div>


        );
    }
}

export default App;
