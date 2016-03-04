import React from 'react';
import Al from './al';
import Nl from './nl';
//import jQuery from 'jquery';

class Prefs extends React.Component {
 constructor() {
   super();
 }


 renderAl() {
   return <Al />;
  }

  renderNl() {
    return <Nl />;
   }





 render() {
   return(
     <div className="container">
       <h2>choose your destiny:</h2>
          <button onClick={this.renderAl} className="btn btn-default">American League</button>
          <button onClick={this.renderNl} className="btn btn-default">National League</button>
     </div>
   );
 }
}

export default Prefs;
