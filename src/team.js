import React from 'react';
import jQuery from 'jquery';
import NewsItem from './newsItem'
import SkyLight from 'react-skylight'

class Team extends React.Component {
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

    var teamlast5 = this.props.team.slice(0,5);
    return(
    <div className="row">
    <h3>Your favourite teams news</h3>
    <button onClick={() => this.refs.simpleDialog.show()}>
    {teamlast5.map(function(news, i) {
      return(
        <p>{news.title}</p>
      );
    })}
    </button>

    <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref="simpleDialog" title="News">
      {this.props.team.map(function(news, i) {
        return(
          <NewsItem title={news.title} link={news.link} description={news.description} />
        );
      })}
      </SkyLight>
    </div>
    );
  }
}

export default Team;
