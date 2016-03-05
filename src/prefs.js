import React from 'react';
//import Al from './al';
//import Nl from './nl';
//import jQuery from 'jquery';
// import News1 from './news1'
// import News2 from './news2'
import Dashboard from './dashboard'

class Prefs extends React.Component {
 constructor() {
   super();
     this.state = {
       checked1: false,
       checked2: false,
       continue: false,
       team: ""
     }
 }

 selectTeam(event) {
    event.preventDefault();

    let component = this;
    let team = this.refs.teamSelect.value;

    component.setState({
        team: team
    });

  }

wannaContinue() {
  this.setState({
      continue: true
  });
}

isChecked1() {
  this.setState({
    checked1: !this.state.checked1
  });
}


isChecked2() {
  this.setState({
     checked2: !this.state.checked2
  });
}

 render() {
   var renderDashboard;
      if (this.state.continue === true) {
        renderDashboard = <Dashboard check1={this.state.checked1} check2={this.state.checked2} teamchoice={this.state.team} />;
      }
      else {
        renderDashboard = ""
      }

   return(
     <div className="container">
     <div className="row">
       <h2>choose your destiny:</h2>
            <label>
              <input
                type="checkbox"
                checked={this.state.checked1}
                onChange={this.isChecked1.bind(this)} />
              select
            </label>
            <label>
              <input
                type="checkbox"
                checked={this.state.checked2}
                onChange={this.isChecked2.bind(this)} />
              select
            </label>
            <form role="form" onSubmit={this.selectTeam.bind(this)}>

                      <div className="form-group">
                        <label>Favorite Team:</label>
                          <select className="form-control" ref="teamSelect">
                            <option>Angels</option>
                            <option>Astros</option>
                            <option>Athletics</option>
                            <option>Bluejays</option>
                            <option>Braves</option>
                            <option>Brewers</option>
                            <option>Cardinals</option>
                            <option>Cubs</option>
                            <option>Diamondbacks</option>
                            <option>Dodgers</option>
                            <option>Gians</option>
                            <option>Indians</option>
                            <option>Mariners</option>
                            <option>Marlins</option>
                            <option>Mets</option>
                            <option>Nationals</option>
                            <option>Orioles</option>
                            <option>Padres</option>
                            <option>Phillies</option>
                            <option>Pirates</option>
                            <option>Rangers</option>
                            <option>Rays</option>
                            <option>Redsox</option>
                            <option>Reds</option>
                            <option>Rockies</option>
                            <option>Royals</option>
                            <option>Tigers</option>
                            <option>Twins</option>
                            <option>Whitesox</option>
                            <option>Yankees</option>
                          </select>
                      </div>
                      <button type="submit" className="formbutton">Add Review</button>
                  </form>







          {renderDashboard}

      </div>
        <div className="row">
          <button onClick={this.wannaContinue.bind(this)} className="btn btn-default">Show your feed</button>
        </div>
     </div>
   );
 }
}

export default Prefs;
