import React from 'react';
import PropTypes from 'prop-types';

import './EditCard.css';


class EditCard extends React.Component {

    static propTypes = {
        icesCard: PropTypes.array.isRequired,   
        nameErrorText: PropTypes.string,
        priceErrorText: PropTypes.string,
        isValidName: PropTypes.bool,
        isValidPrice: PropTypes.bool
    }

    state ={
        icesCard: this.props.icesCard,
        nameErrorText: '',
        priceErrorText: '',
        isValidName: true,
        isValidPrice: true
    }
ChangeNameText = (EO) =>{
    var currentValue=EO.target.value
    if (currentValue==""){
       this.setState({nameErrorText:'Error', isValidName:false})
       
    }
    else {
        this.setState({nameErrorText:'', isValidName:true})
    }
    this.setState({value: currentValue})
}
ChangePriceText = (EO) =>{
    var currentValue=EO.target.value
    if (currentValue==""){
       this.setState({priceErrorText:'Error', isValidPrice:false})
       
    }
    else {
        this.setState({priceErrorText:'', isValidPrice:true})
    }
    this.setState({value: currentValue})
}





render (){

    return ( 
        
      <div className='EditCard'>
      <h3 className='NameIceCard'>Edit existing Product</h3>
      <div className='EditId'>ID: {this.props.icesCard[0].code}</div>
      <div className='EditName'>
        <label>Name</label>
        <input defaultValue={this.props.icesCard[0].nameice} onChange={this.ChangeNameText}></input>
        <div className='NameError'>{this.state.nameErrorText}</div>
      </div>
      <div className='EditPrice'>
      <label>Price</label>
        <input defaultValue={this.props.icesCard[0].price} onChange={this.ChangePriceText}></input>
        <div className='NameError'>{this.state.priceErrorText}</div>
      </div>
      <div className='EditURL'>
        <label>URL</label>
        <input defaultValue={this.props.icesCard[0].url}></input>
      </div>
      <div className='EditQuantity'>
      <label>Quantity</label>
        <input defaultValue={this.props.icesCard[0].count}></input>      
      </div>
      <input className='EditCardSave' type='button' value='Save' disabled={!this.state.isValidName||!this.state.isValidPrice}></input>
      <input className='EditCardCancel' type='button' value='Cancel'></input>

      </div>
      )

   
      
  
    }

    


}
export default EditCard;
