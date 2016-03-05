import React from 'react';
import jQuery from 'jquery';
import NewsItem from './newsItem'

class Team extends React.Component {
  constructor() {
   super();
 }

  render(){
    return(
    <div className="row">
      {this.props.team.map(function(news, i) {
        return(
          <NewsItem title={news.title} link={news.link} description={news.description} />
        );
      })}
    </div>
    );
  }
}

export default Team;
