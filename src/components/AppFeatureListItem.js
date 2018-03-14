import React, { Component } from 'react'

class AppFeatureListItem extends Component {
  render () {
    return (
      <li className='sc-item_features_listitem'>{this.props.feature}</li>
    )
  }
}

export default AppFeatureListItem
