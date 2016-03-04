import React from 'react';
import jQuery from 'jquery';
import NewsItem from './newsItem'

class Dashboard extends React.Component {
  constructor() {
   super();
   this.state = {
     news1: [],
     news2: []
   };
 }


 showNews(event) {
   let component = this;

   jQuery.getJSON("https://sportapi.herokuapp.com/news.json", function(data) {
     console.log(data);

     component.setState({
       news1: data.mlb_news.rss.channel.item,
       news2: data.baseball_america_news.rss.channel.item
     });
   });
 }



 componentDidMount() {
   this.showNews();
 }




  render(){
    var news1;
       if (this.props.check1 === true) {
         news1 = "poep"
        //  {this.state.news1.map(function(news, i) {
        //    return(
        //      <NewsItem title={news.title} link={news.link} description={news.description} />
        //    );
        //  })}
       }
       else {
         news1 = ""
       }
    var news2;
       if (this.props.check2 === true) {
         news2 = "poep2"
        //  {this.state.news2.map(function(news, i) {
        //    return(
        //      <NewsItem title={news.title} link={news.link} description={news.description} />
        //    );
        //  })}
       }
       else {
         news2= ""
       }
    return(
    <div>
    <div className="row">
        {news1}
    </div>
    <div className="row">
        {news2}
    </div>
    </div>
    );
  }
}

export default Dashboard;
