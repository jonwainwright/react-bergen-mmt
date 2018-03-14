import React, { Component } from 'react'
import AppItem from './AppItem'
import './App.scss'

import full1 from '../assets/images/full1.png'
import full2 from '../assets/images/full2.png'
import full3 from '../assets/images/full3.png'
import full4 from '../assets/images/full4.png'
import thumb1 from '../assets/images/thumb1.png'
import thumb2 from '../assets/images/thumb2.png'
import thumb3 from '../assets/images/thumb3.png'
import thumb4 from '../assets/images/thumb4.png'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      'name': 'Bergen Vegan Tote',
      'by': {
        'name': 'Eco Vegan',
        'details': 'Bergen ipsum dolor amet tri-tip ham ball tip salami cupim. Short loin kielbasa rump shankle, tenderloin sausage kevin. Turkey shankle turducken porchetta filet mignon brisket pancetta. Hamburger burgdoggen sirloin, bacon beef ground round fatback tail salami doner frankfurter cow leberkas pig.'
      },
      'price': '$129.00',
      'features': [
        '13\'H x 11\'W x 7\'D',
        '9\' handle drop',
        'Zippered opening',
        'Wood zip puller with embossed leaf motif',
        'Bright orange lining'
      ],
      'careInstructions': 'Turducken ball tip ham hock beef ribeye porchetta brisket prosciutto sirloin tail. Porchetta tri-tip turducken pig flank tenderloin shoulder rump beef ribs. Drumstick beef cupim meatloaf porchetta tenderloin. Meatloaf t-bone pancetta landjaeger, pork chop sausage filet mignon chuck jerky cupim rump. Flank turkey kielbasa boudin picanha prosciutto ball tip fatback.',
      'selectedImage': {
        'full': full1,
        'thumb': thumb1,
        'alt': 'Front side view of tote'
      },
      'images': [
        {
          'full': full1,
          'thumb': thumb1,
          'alt': 'Front side view of tote'
        },
        {
          'full': full2,
          'thumb': thumb2,
          'alt': 'Side view of tote'
        },
        {
          'full': full3,
          'thumb': thumb3,
          'alt': 'Back side view of tote'
        },
        {
          'full': full4,
          'thumb': thumb4,
          'alt': 'Close up view of tote'
        }
      ],
      'colors': [
        {
          'value': 'stone+espresso',
          'label': 'Stone+Espresso'
        },
        {
          'value': 'indigo+gunmetal',
          'label': 'Indigo+Gunmetal'
        },
        {
          'value': 'olive+espresso',
          'label': 'Olive+Espresso'
        }
      ]
    }
    this.selectImage = this.selectImage.bind(this)
  }
  selectImage (selectedImage) {
    this.setState({selectedImage: selectedImage})
  }
  render () {
    return (
      <div className='sc-container'>
        <AppItem
          name={this.state.name}
          by={this.state.by}
          price={this.state.price}
          features={this.state.features}
          careInstructions={this.state.careInstructions}
          selectedImage={this.state.selectedImage}
          selectImage={this.selectImage}
          images={this.state.images}
          colors={this.state.colors}
        />
      </div>
    )
  }
}

export default App
