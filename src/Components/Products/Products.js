import React, { Component } from 'react';
import Deets from '../Deets/Deets'
import axios from 'axios';

export default class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
    this.getProducts = this.getProducts.bind( this )
    
  }

  componentDidMount() {
    this.getProducts()
  }
  
  getProducts() {
    axios.get('/api/products')
    .then((res) => {
      this.setState({
        products: res.data
      })
    })
  }


  render() {
    let listing = this.state.products.map( element => {
        return (
          <div>
            <Deets
             deets={element}
             id={element.id}
             
            />
          </div>
        )
    })

    console.log(this.state)
    return (
      <div className='product-container'>
        <h1>Products</h1>

        {listing}
      </div>
    )
  }
}

  
