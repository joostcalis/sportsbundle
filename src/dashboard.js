import React from 'react';
import jQuery from 'jquery';
import News1 from './news1'
import News2 from './news2'

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
       news1: data.mlb_news,
       news2: data.baseball_america_news
     });
   });
 }



 componentDidMount() {
   this.showNews();
 }




  render(){
    var news1;
       if (this.props.check1 === true) {
         news1 = <News1 list1={this.state.news1}/>
       }
       else {
         news1 = ""
       }
    var news2;
       if (this.props.check2 === true) {
         news2 = <News2 list2={this.state.news2}/>
       }
       else {
         news2= ""
       }
    return(
    <div>
    <div class="clear"></div>
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
