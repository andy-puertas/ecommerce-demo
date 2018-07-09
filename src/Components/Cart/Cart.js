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
    this.deleteProd = this.deleteProd.bind( this )
    this.getTotal = this.getTotal.bind( this )
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
      this.getTotal()
    })
  }

  deleteProd(id) {
    console.log(id)
    axios.delete(`/api/remove/${id}`)
      .then(res => res.data)
        this.getCart()
        this.getTotal()
    }
   
  getTotal(){
    console.log(this.state.total)
    let cartTotal = 0
    for(let i = 0; i < this.state.cart.length; i++ ){
        cartTotal += (+this.state.cart[i].price * this.state.cart[i].quantity)
    } this.setState({
          total: cartTotal
    })
      
  }  


  render() {
    console.log(this.props)
    let carto = this.state.cart.map(element => {
      return (
        <div>
          <CartProducts
            prods={element}
            id={element.id}
            delete={this.deleteProd}
          />
        </div>
      )
    })

    return (
      
      <div>
        <h1>Cart</h1>
          <div className='cart-container'>
            {carto}

            <p>Total: ${this.state.total}.99</p>
            <button>Checkout</button>
          </div>
      </div>
    )
  }
}
