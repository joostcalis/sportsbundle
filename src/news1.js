import React from 'react';
import jQuery from 'jquery';
import NewsItem from './newsItem'

class News1 extends React.Component {
  constructor() {
   super();
 }

  render(){
    return(
    <div className="row">
      {this.props.list1.map(function(news, i) {
        return(
          <NewsItem title={news.title} link={news.link} description={news.description} />
        );
      })}
    </div>
    );
  }
}

export default News1;
