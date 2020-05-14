import React from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';

class Products extends React.Component {

  static propTypes = {
      code: PropTypes.number.isRequired,
      isSelected: PropTypes.bool,
      isDelete: PropTypes.bool,
      nameice: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      foto: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      cbDelete: PropTypes.func.isRequired,
      cbSelected: PropTypes.func.isRequired,
  }

  LineClick = (EO) => {
    this.props.cbSelected(this.props.code);  
    
  }

  ButtonClick = (EO) => {   
    this.props.cbDelete(this.props.code)    
  }

  render (){  
    
      return (
        <tr key={this.props.code} className='Product' onClick={this.LineClick} style={{backgroundColor: this.props.isSelected?'orange':'white'}}>
          <td className='NameIce'>{this.props.nameice}</td>
          <td className='PriceIce'>{this.props.price}</td>
          <td className='URL'>
            <a className='URLIce' href={this.props.url} target='_blank'>{this.props.foto}</a>
          </td>
          <td className='Count'>{this.props.count} </td>
          <td className='IShopButton'>
            <input className='IShopButEdit'type='button' value='Edit'></input>
            <input className='IShopButDelete'type='button' value='Delete' onClick={this.ButtonClick}></input>
          </td>
        </tr>
      )
      }
    }
    export default Products;
