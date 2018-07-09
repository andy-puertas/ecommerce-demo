import React, { Component } from 'react'
import { increaseQuantity } from '../../ducks/reducer';
import { decreaseQuantity } from '../../ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import CartProducts from '../CartProducts/CartProducts'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      total: 0
    }
    this.getCart = this.getCart.bind( this )
    this.deleteProd = this.deleteProd.bind( this )
    this.getTotal = this.getTotal.bind( this )
    this.incQuan = this.incQuan.bind( this )
    this.decQuan = this.decQuan.bind( this )
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

  incQuan(quantity, productid) {
    axios.put('/api/quant', {quantity, productid})
    .then( res => {
      console.log(res.data)
      this.props.increaseQuantity(quantity, productid)
    })
    this.getCart();
    this.getTotal();
  }

  decQuan(quantity, productid) {
    axios.put('/api/quant', {quantity, productid})
    .then( res => {
      console.log(res.data)
      this.props.decreaseQuantity(quantity, productid)
    })
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
            inc={this.incQuan}
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

function mapStateToProps(state) {
  return {
    quantity: state.quantity,
    productid: state.productid
  }
}

export default connect(mapStateToProps, {increaseQuantity, decreaseQuantity})(Cart)