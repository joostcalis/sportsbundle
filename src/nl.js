import React from 'react';
import jQuery from 'jquery';

class Nl extends React.Component {
  constructor() {
   super();

   this.state = {
     nl_news: []
   };
 }

 getNews() {
   let component = this;

   jQuery.getJSON("", function(data) {
     console.log("getting nl news");
     component.setState({
       nl_news: data
     });
   });
  }

  render(){
    return(
      <div>
        {this.state.nl_news.map(function(newsitem, i) {
          return (
            {newsitem}
          );
        }, this)}
      </div>
    );
  }
}

export default Nl;
