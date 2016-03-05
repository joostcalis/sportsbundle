import React from 'react';
import jQuery from 'jquery';
import NewsItem from './newsItem'
import SkyLight from 'react-skylight'

class News2 extends React.Component {
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

    var news2last5 = this.props.list2.slice(0,5);
    return(
    <div className="row">
    <h3>Baseball America</h3>
    <button onClick={() => this.refs.simpleDialog.show()}>
    {news2last5.map(function(news, i) {
      return(
        <p>{news.title}</p>
      );
    })}
    </button>

    <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref="simpleDialog" title="News">
      {this.props.list2.map(function(news, i) {
        return(
          <NewsItem title={news.title} link={news.link} description={news.description} />
        );
      })}
      </SkyLight>
    </div>
    );
  }
}

export default News2;
