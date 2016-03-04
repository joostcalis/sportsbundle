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

   $(document).ready(function () {
       $.ajax({
           type: "GET",
           url: "http://mlb.mlb.com/partnerxml/gen/news/rss/mlb.xml",
           cache: false,
           dataType: "xml",
           success: function(xml) {
               $(xml).find('channel').each(function(){
                   var name = $(this).find("title").text()
                   alert(name);
               });
           }
       });
   });
  }

  render(){
    return(
    
    );
  }
}

export default Nl;
