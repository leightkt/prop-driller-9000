import React, { Component } from 'react';
import Transformer from '../Components/Transformer'

class TransformersSection extends Component {

  render() {
    return (
      <section className = "transformers-section">
        {this.props.transformers.map((transformer) => <Transformer robot={transformer} key={transformer.id}/>)}
      </section>
    );
  }
}

export default TransformersSection;
