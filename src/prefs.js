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
       continue: false
     }
 }

wannaContinue() {
  this.setState({
      continue: true
  });
}

isChecked1() {
  this.setState({
    checked1: !this.state.checked1 // flip boolean value
  });
}


isChecked2() {
  this.setState({
     checked2: !this.state.checked2 // flip boolean value
  });
}

 render() {
   var renderDashboard;
      if (this.state.continue === true) {
        renderDashboard = <Dashboard check1={this.state.checked1} check2={this.state.checked2} />;
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
