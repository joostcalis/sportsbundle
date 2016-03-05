import React from 'react';
import jQuery from 'jquery';

class NewsItem extends React.Component {
  constructor() {
   super();
   this.state = {
     title: "",
     link: "",
     description: ""
   };
 }

componentDidMount(){
  this.setState({
    title: this.props.title,
    link: this.props.link,
    description: this.props.description
  })
}

  render(){
    return(
        <div className="col-md-12">
          <div className="col-style margin-row">
            <h3>{this.state.title}</h3>
            <a href="{this.state.link}">lol</a>
            </div>
        </div>
    );
  }
}

export default NewsItem;
