import React, { Component } from 'react'
import './AppMenu.scss'
import {NavLink} from 'react-router-dom'

class AppMenu extends Component {
  render () {
    return (
      <nav className='sc-item_menu'>
        <ul className='sc-item_menuitems'>
          <li className='sc-item_menuitem'>
            <NavLink exact to='/' className='sc-item_menuitem_link' activeClassName='active'>
              Description
            </NavLink>
          </li>
          <li className='sc-item_menuitem'>
            <NavLink exact to='/features' className='sc-item_menuitem_link' activeClassName='active'>
              Features
            </NavLink>
          </li>
          <li className='sc-item_menuitem'>
            <NavLink exact to={'/' + this.props.byslug} className='sc-item_menuitem_link' activeClassName='active'>
              Eco Vegan Details
            </NavLink>
          </li>
          <li className='sc-item_menuitem'>
            <NavLink exact to='/care-instructions' className='sc-item_menuitem_link' activeClassName='active'>
              Care Instructions
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default AppMenu
