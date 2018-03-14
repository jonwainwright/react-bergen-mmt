import React, { Component } from 'react'
import AppFeatureListItem from './AppFeatureListItem'
import './AppFeatures.scss'

class AppFeatures extends Component {
  render () {
    return (
      <div className='sc-item_main_content sc-item_features'>
        <h2 className='sc-item_features_title'><a name='features'>Features</a></h2>
        <ul className='sc-item_features_list'>
          {this.props.features.map(feature =>
            <AppFeatureListItem key={feature} feature={feature} />
          )}
        </ul>
      </div>
    )
  }
}

export default AppFeatures
