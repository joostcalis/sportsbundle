import React from 'react';
import jQuery from 'jquery';

class Al extends React.Component {
  constructor() {
   super();

   this.state = {
     al_news: []
   };
 }

 getNews() {
   let component = this;

   jQuery.getJSON("", function(data) {
     console.log("getting al news");
     component.setState({
       al_news: data
     });
   });
  }

  render(){
    return(
      <div>
        {this.state.al_news.map(function(newsitem, i) {
          return (
            {newsitem}
          );
        }, this)}
      </div>
    );
  }
}

export default Al;
