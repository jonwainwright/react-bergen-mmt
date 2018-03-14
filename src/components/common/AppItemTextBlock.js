import React, { Component } from 'react'
import './AppItemTextBlock.scss'

class AppItemTextBlock extends Component {
  render () {
    return (
      <div className='sc-item_main_content sc-item_textblock'>
        <h2 className='sc-item_textblock_title'>{this.props.title}</h2>
        <p className='sc-item_textblock_text'>{this.props.text}</p>
      </div>
    )
  }
}

export default AppItemTextBlock
