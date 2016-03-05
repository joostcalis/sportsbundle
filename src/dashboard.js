import React from 'react';
import jQuery from 'jquery';
import News1 from './news1';
import News2 from './news2';
import Team from './team';

class Dashboard extends React.Component {
  constructor() {
   super();
   this.state = {
     news1: [],
     news2: [],
     team: [],
     teamchoice: "",
     news2last5: [],
     news1last5: []
   };
 }


 showNews(event) {
   let component = this;
   let teamchoice = this.props.teamchoice;


   jQuery.getJSON("https://sportapi.herokuapp.com/news.json", function(data) {
     console.log(data);

     component.setState({
       news1: data.mlb_news,
       news2: data.baseball_america_news,
       team: data[teamchoice]


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
         news2 = <News2 list2={this.state.news2} />
       }
       else {
         news2= ""
       }


    return(
    <div>
    <div class="clear"></div>
    <div className="row">
      <div className="col-md-4">
        {news1}
      </div>
      <div className="col-md-4">
        {news2}
      </div>
      <div className="col-md-4">
        <Team team={this.state.team} />
      </div>
    </div>
    </div>
    );
  }
}

export default Dashboard;
