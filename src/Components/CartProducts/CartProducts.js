import React, { Component } from 'react';

export default class CartProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }
    this.increase = this.increase.bind( this )
    
  }

  componentDidMount() {
    this.setState({
        quantity: this.props.prods.quantity
    })
  }

  increase() {
    this.props.inc(this.state.quantity, this.props.prods.productid)
    this.setState({
      quantity: this.state.quantity + 1
    })
  }

  decrease() {
    this.props.dec(this.state.quantity, this.props.prods.productid)
    this.setState({
      quantity: this.state.quantity - 1
    })
  }


  
  render() {
    let {id, title, img, quantity, price } = this.props.prods
      return (
        <div className='product-incart'>
          <img height={100} id='cart-pic' src={img} alt='logo'/>
          <h4>{title}</h4>
          <p>${price}.99</p>
          <p>Quantity: {quantity}</p>
          <button id='inc' onClick={() => this.increase()}>▲</button>
          <button id='dec' onClick={() => this.decrease()}>▼</button>
          <button onClick={() => this.props.delete(id)}>Remove</button>
        </div>
      )
    }
}
