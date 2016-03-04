import React from 'react';
//import Al from './al';
//import Nl from './nl';
//import jQuery from 'jquery';
import News1 from './news1'
import News2 from './news2'

class Prefs extends React.Component {
 constructor() {
   super();
     this.state = {
       show1: false,
       show2: false
     }
 }


onClick(event){
        event.preventDefault();
        this.props.onClick(this.refs.leagueSelected.value);
}


rendershow1() {
  this.setState({
    show1: true
  });
}


rendershow2() {
  this.setState({
    show2: true
  });
}

 render() {
   var putShowOne;
      if (this.state.show1 === true) {
        putShowOne = <News1 />;
      }
      else {
        putShowOne = ""
      }

      var putShowTwo;
         if (this.state.show2 === true) {
           putShowTwo = <News2 />;
         }
         else {
           putShowTwo = ""
         }

   return(
     <div className="container">
     <div className="row">
       <h2>choose your destiny:</h2>
          <button className="btn btn-default" ref="show1" onClick={this.rendershow1.bind(this)} >one
          </button>
          <button className="btn btn-default" ref="show2" onClick={this.rendershow2.bind(this)} >two
          </button>
          {putShowOne}
          {putShowTwo}
      </div>
        <div className="row">
          <button onClick={this.renderNl} className="btn btn-default">Show your feed</button>
        </div>
     </div>
   );
 }
}

export default Prefs;
