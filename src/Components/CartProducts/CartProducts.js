import React, { Component } from 'react';

export default class CartProducts extends Component {
  constructor(props) {
    super(props)
    
  }

  
  render() {
    let {id, title, img, quantity, price } = this.props.prods
      return (
        <div className='product-incart'>
          <img height={100} id='cart-pic' src={img} alt='logo'/>
          <h4>{title}</h4>
          <p>${price}.99</p>
          <p>Quantity: {quantity}</p>
          <button id='incQ' onClick={() => this.props.inc()}>▲</button>
          <button id='decQ' onClick={() => this.localDecrease()}>▼</button>
          <button onClick={() => this.props.delete(id)}>Remove</button>
        </div>
      )
    }
}
