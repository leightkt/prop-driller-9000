import React, { Component } from 'react';
import Transformer from '../Components/Transformer'

class TransformersSection extends Component {
  state = {
    index: 0
  }

  changeState = () => {
    if (this.state.index === 2){
      this.setState({ index: 0 })
    } else {
      this.setState({ index: this.state.index + 1})
    }
  }

  render() {
    return (
      <section className = "transformers-section">
        { <Transformer 
        robot={this.props.transformers[this.state.index]} 
        key={this.props.transformers[this.state.index].id}
        changeState={this.changeState}/>}
      </section>
    );
  }
}

export default TransformersSection;
