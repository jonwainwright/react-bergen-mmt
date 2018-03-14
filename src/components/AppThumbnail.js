import React, { Component } from 'react'

class AppImage extends Component {
  constructor (props) {
    super(props)
    this.selectImage = this.selectImage.bind(this)
  }

  selectImage () {
    this.props.selectImage({
      'full': this.props.full,
      'thumb': this.props.thumb,
      'alt': this.props.alt
    })
  }

  render () {
    return (
      <li className={'sc-item_images_listitem' + (this.props.active ? ' active' : '')}>
        <a onClick={this.selectImage}>
          <img src={this.props.thumb} className='sc-item_images_thumb' alt='{this.props.alt}' />
        </a>
      </li>
    )
  }
}

export default AppImage
