import React, { Component } from 'react'
import axios from 'axios';
import CartProducts from '../CartProducts/CartProducts'

export default class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      total: 0
    }
    this.getCart = this.getCart.bind( this )
  }
  
  componentDidMount() {
    this.getCart()
  }

  getCart() {
    axios.get('/api/cart')
    .then( (res) => {
      console.log(res.data)
      this.setState({
        cart: res.data
      })

    })
  }

  render() {
    let carto = this.state.cart.map(element => {
      return (
        <div>
          <CartProducts
            prods={element}
            id={element.id}

          />
        </div>
      )
    })

    return (
      <div>
        <h3>Cart</h3>
          <div className='cart-container'>
            {carto}

            <p>Total: ${this.state.total}</p>
          </div>
      </div>
    )
  }
}
