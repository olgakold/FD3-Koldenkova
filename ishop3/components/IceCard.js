import React from 'react';
import PropTypes from 'prop-types';

import './IceCard.css';


class IceCard extends React.Component {

    static propTypes = {
        icesCard: PropTypes.array.isRequired,   
     
    }

render (){
      
      return ( 
      <div className='IceCard'>
      <h3 className='NameIceCard'>{this.props.icesCard[0].nameice}</h3>
      <div className='NameIcePrice'>Price: {this.props.icesCard[0].price}</div>
      <a className='NameIceURl' href={this.props.icesCard[0].url} target='_blank'>{this.props.icesCard[0].foto} </a>  
      <div className='NameIceCount'>Quantity: {this.props.icesCard[0].count}</div>
    
    </div>
    )
    
   
  
}
}
export default IceCard;
