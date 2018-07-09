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
    this.addTo = this.addTo.bind( this )
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

  addTo() {
    //console.log(quantity, productID)
    //let {quantity, productID} = this.props
    axios.post('/api/tocart')
    .then( res => {
     
      alert('Added to cart!')
    })
  }


  
  render() {
    let listing = this.state.products.map( element => {
        return (
          <div>
            <Deets
             deets={element}
             id={element.id}
             add={this.addTo}
            />
          </div>
        )
    })

    console.log(this.state)
    return (
      <div>
        <h3>Products</h3>

        {listing}
      </div>
    )
  }
}
