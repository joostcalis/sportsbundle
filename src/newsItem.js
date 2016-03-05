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
        <div>
          <div className="col-style margin-row">
            <h3>{this.state.title}</h3>
            <h1>{this.state.description}</h1>
            <a href="{this.state.link}">go to article</a>
            </div>
        </div>
    );
  }
}

export default NewsItem;
