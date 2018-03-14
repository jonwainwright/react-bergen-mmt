import React, { Component } from 'react'
import './AppForm.scss'

class AppForm extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      quantity: 2
    }

    this.addToCart = this.addToCart.bind(this)
    this.increaseQuantity = this.increaseQuantity.bind(this)
    this.decreaseQuantity = this.decreaseQuantity.bind(this)
  }

  addToCart (event) {
    event.preventDefault()
  }

  increaseQuantity (event) {
    event.preventDefault()
    if (this.state.quantity < 99) {
      this.setState((prevState) => ({
        quantity: prevState.quantity + 1
      }))
    }
  }

  decreaseQuantity (event) {
    event.preventDefault()
    if (this.state.quantity > 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1
      }))
    }
  }

  render () {
    return (
      <form className='sc-item_form'>
        <h2 className='sc-item_form_title'>Add to Cart</h2>
        <div className='sc-item_form_color'>
          <label className='sc-item_form_color_label' htmlFor='color'>Color</label>
          <select id='color' name='color' className='sc-item_form_color_select'>
            {this.props.colors.map(color =>
              <option key={color.value} value={color.value}>{color.label}</option>
            )}
          </select>
        </div>
        <div className='sc-item_form_quantity'>
          <label className='sc-item_form_quantity_label' htmlFor='quantity'>Quantity</label>
          <div className='sc-item_form_quantity_input'>
            <button className='sc-item_form_quantity_input_decrease' onClick={this.decreaseQuantity}>-</button>
            <input id='quantity' name='quantity' className='sc-item_form_quantity_input_value' value={this.state.quantity} readOnly />
            <button className='sc-item_form_quantity_input_increase' onClick={this.increaseQuantity}>+</button>
          </div>
        </div>
        <button onClick={this.addToCart} className='sc-item_form_addtocart'>Add to Cart</button>
      </form>
    )
  }
}

export default AppForm
