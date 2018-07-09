import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {addCart} from '../../ducks/reducer'
import './Deets.css';

class Deets extends Component {
  constructor(props) {
    super(props);
    this.addTo = this.addTo.bind( this )
  }

  addTo() {
    const {id} = this.props.deets;
    let carty = {
       productid: id
    };

    axios.post('/api/tocart', {carty})
    .then( res => {
      console.log(res);
      console.log(res.data);
      this.props.addCart(carty);
      alert('Added to cart!');
    }).catch('err')
  }


  render() {
    console.log(this.props)
    let {img, title, description, price } = this.props.deets

    return (
      <div className='product-items'>
        <img className='deets-image' height={100} width={100} src={img} alt='logo' />
        <h3>{title}</h3>
        <p>{description}</p>
        <p> ${price}.99</p>
        <button onClick={() => this.addTo()}>Add to Cart</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      productid: state.productid
  }
}


export default connect(mapStateToProps, { addCart })(Deets)
