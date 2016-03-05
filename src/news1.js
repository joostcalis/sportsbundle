import React from 'react';
import jQuery from 'jquery';
import NewsItem from './newsItem'
import SkyLight from 'react-skylight'

class News1 extends React.Component {
  constructor() {
   super();
 }

  render(){

    var myBigGreenDialog = {
      backgroundColor: '#ADBCC9',
      color: '#ffffff',
      width: '70%',
      height: '600px',
      overflow: 'auto',
      marginTop: '-300px',
      marginLeft: '-35%',
    };

    var news1last5 = this.props.list1.slice(0,5);
    return(
    <div className="row">
    <h3>Mlb news</h3>
    <button onClick={() => this.refs.simpleDialog.show()}>
    {news1last5.map(function(news, i) {
      return(
        <p>{news.title}</p>
      );
    })}
    </button>

    <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref="simpleDialog" title="News">
      {this.props.list1.map(function(news, i) {
        return(
          <NewsItem title={news.title} link={news.link} description={news.description} />
        );
      })}
      </SkyLight>
    </div>
    );
  }
}

export default News1;
