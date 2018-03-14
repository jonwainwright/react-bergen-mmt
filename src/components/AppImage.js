import React, { Component } from 'react'
import './AppImage.scss'

class AppImage extends Component {
  render () {
    let divStyle = {
      backgroundImage: 'url(' + this.props.selectedImage.full + ')'
    }
    return (
      <div className='sc-item_image' style={divStyle} />
    )
  }
}

export default AppImage
