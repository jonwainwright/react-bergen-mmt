import React, { Component } from 'react'
import AppMenu from './AppMenu'
import AppDescription from './AppDescription'
import AppFeatures from './AppFeatures'
import AppItemTextBlock from './common/AppItemTextBlock'
import AppCareInstructions from './AppCareInstructions'
import AppThumbnails from './AppThumbnails'
import AppForm from './AppForm'
import './AppDetails.scss'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import slugify from 'slugify'

class AppDetails extends Component {
  getBySlug () {
    return slugify(this.props.by.name).toLowerCase() + '-details'
  }
  render () {
    return (
      <Router>
        <div className='sc-item_details'>
          <h1 className='sc-item_title'>{this.props.name}</h1>
          <AppMenu byslug={this.getBySlug()} />
          <Switch>
            <Route exact path='/' render={props => (
              <AppDescription
                name={this.props.name}
                by={this.props.by}
                price={this.props.price}
                {...props}
              />
            )} />
            <Route exact path='/features' render={props => (
              <AppFeatures features={this.props.features} {...props} />
            )} />
            <Route exact path={'/' + this.getBySlug()} render={props => (
              <AppItemTextBlock
                title={this.props.by.name + ' Details'}
                text={this.props.by.details}
                {...props}
              />
            )} />
            <Route exact path='/care-instructions' render={props => (
              <AppCareInstructions
                text={this.props.careInstructions}
                {...props}
              />
            )} />
            <Route render={props => (<AppItemTextBlock {...props} />)} />
          </Switch>
          <AppThumbnails
            selectedImage={this.props.selectedImage}
            selectImage={this.props.selectImage}
            images={this.props.images}
          />
          <AppForm
            colors={this.props.colors}
          />
        </div>
      </Router>
    )
  }
}

export default AppDetails
