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
        <div className="col-md-4">
          <h2>{this.state.title}</h2>
          <p>{this.state.description}</p>
          <a href="{this.state.link}">lol</a>
        </div>
    );
  }
}

export default NewsItem;
