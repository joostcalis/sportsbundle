import React from 'react';
import Al from './al';
import Nl from './nl';
//import jQuery from 'jquery';

class Prefs extends React.Component {
 constructor() {
   super();
 }

 selectLeague(event) {
   console.log(event.target);
 }

renderLeague() {
  return(
    <Nl />
  );
}


 render() {
   return(
     <div className="container">
       <h2>choose your destiny:</h2>
          <button onClick={this.selectLeague.bind(this)} data-league="al" className="btn btn-default">American League</button>
          <button onClick={this.renderNl} className="btn btn-default">National League</button>
          {/*{ this.renderLeague() }*/}
     </div>
   );
 }
}

export default Prefs;
