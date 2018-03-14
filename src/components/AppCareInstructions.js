import React, { Component } from 'react'
import AppItemTextBlock from './common/AppItemTextBlock'

class AppCareInstructions extends Component {
  render () {
    return (
      <AppItemTextBlock title='Care Instructions' {...this.props} />
    )
  }
}

export default AppCareInstructions
