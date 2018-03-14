import React, { Component } from 'react'
import AppImage from './AppImage'
import AppDetails from './AppDetails'

class AppItem extends Component {
  render () {
    return (
      <div className='sc-item'>
        <AppImage
          selectedImage={this.props.selectedImage}
        />
        <AppDetails
          name={this.props.name}
          by={this.props.by}
          price={this.props.price}
          features={this.props.features}
          careInstructions={this.props.careInstructions}
          selectedImage={this.props.selectedImage}
          selectImage={this.props.selectImage}
          images={this.props.images}
          colors={this.props.colors}
        />
      </div>
    )
  }
}

export default AppItem
