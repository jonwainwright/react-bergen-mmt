import React, { Component } from 'react'
import './AppDescription.scss'

class AppDescription extends Component {
  render () {
    return (
      <div className='sc-item_main_content sc-item_description'>
        <h2 className='sc-item_description_title'><a name='description'>Description</a></h2>
        <dl className='sc-item_description_name'>
          <dt className='sc-item_description_name_label'>Item Name</dt>
          <dd className='sc-item_description_name_text'>{this.props.name}</dd>
        </dl>
        <dl className='sc-item_description_by'>
          <dt className='sc-item_description_by_label'>By</dt>
          <dd className='sc-item_description_by_text'>{this.props.by.name}</dd>
        </dl>
        <dl className='sc-item_description_price'>
          <dt className='sc-item_description_price_label'>Price</dt>
          <dd className='sc-item_description_price_text'>{this.props.price}</dd>
        </dl>
      </div>
    )
  }
}

export default AppDescription
