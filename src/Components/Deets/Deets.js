import React, { Component } from 'react';
import './Deets.css'

export default class Deets extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    let {img, title, description, price } = this.props.deets

    return (
      <div className='product-container'>
        <img className='deets-image' src={img} alt='logo' />
        <h3>{title}</h3>
        <p>{description}</p>
        <p> ${price}.99</p>
        <button onClick={() => this.props.add()}>Add to Cart</button>
      </div>
    )
  }
}
