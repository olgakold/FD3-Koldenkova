import React from 'react';
import PropTypes from 'prop-types';

import './IceCard.css';


class IceCard extends React.Component {

    static propTypes = {
        nameice: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        foto: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,

      }    

render (){
    return (
    <div className='IceCard'>
      <h3 className='NameIceCard'>{this.props.nameice}</h3>
      <div className='NameIcePrice'>Price: {this.props.price}</div>
      <a className='NameIceURl' href={this.props.url} target='_blank'>{this.props.foto} </a>  
      <div className='NameIceCount'>Quantity: {this.props.count}</div>
    
    </div>
    )
}


}
export default IceCard;
