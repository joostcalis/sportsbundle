import React from 'react';
import jQuery from 'jquery';
import NewsItem from './newsItem'

class News2 extends React.Component {
  constructor() {
   super();
   this.state = {
     news: []
   };
 }


 showNews(event) {
   let component = this;

   jQuery.getJSON("https://sportapi.herokuapp.com/news.json", function(data) {
     console.log(data);

     component.setState({
       news: data.baseball_america_news.rss.channel.item
     });
   });
 }

 componentDidMount() {
   this.showNews();
 }


  render(){
    return(
    <div className="row">
      {this.state.news.map(function(news, i) {
        return(
          <NewsItem title={news.title} link={news.link} description={news.description} />
        );
      })}
    </div>
    );
  }
}

export default News2;
