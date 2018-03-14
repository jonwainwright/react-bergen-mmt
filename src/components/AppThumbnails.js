import React, { Component } from 'react'
import AppThumbnail from './AppThumbnail'
import './AppThumbnails.scss'

class AppThumbnails extends Component {
  render () {
    return (
      <div className='sc-item_images'>
        <h2 className='sc-item_images_title'>Images</h2>
        <ul className='sc-item_images_list'>
          {this.props.images.map(image =>
            <AppThumbnail
              key={image.alt}
              selectImage={this.props.selectImage}
              active={(this.props.selectedImage.alt === image.alt)}
              full={image.full}
              thumb={image.thumb}
              alt={image.alt}
            />
          )}
        </ul>
      </div>
    )
  }
}

export default AppThumbnails
