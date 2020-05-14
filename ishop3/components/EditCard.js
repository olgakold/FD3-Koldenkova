import React from 'react';
import PropTypes from 'prop-types';

import './EditCard.css';


class EditCard extends React.Component {

    static propTypes = {
        icesCard: PropTypes.array.isRequired,   
        nameErrorText: PropTypes.string,
        priceErrorText: PropTypes.string,
        isValid: PropTypes.bool
    }

    state ={
        icesCard: this.props.icesCard,
        nameErrorText: '',
        priceErrorText: '',
        isValid: true
    }
ChangeNameText = (EO) =>{
    var currentValue=EO.target.value
    if (currentValue==""){
       this.setState({nameErrorText:'Error', isValid:false})
       
    }
    else {
        this.setState({nameErrorText:'', isValid:true})
    }
    this.setState({value: currentValue})
}
ChangePriceText = (EO) =>{
    var currentValue=EO.target.value
    if (currentValue==""){
       this.setState({priceErrorText:'Error', isValid:false})
       
    }
    else {
        this.setState({priceErrorText:'', isValid:true})
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
        <span className='NameError'>{this.state.nameErrorText}</span>
      </div>
      <div className='EditPrice'>
      <label>Price</label>
        <input defaultValue={this.props.icesCard[0].price} onChange={this.ChangePriceText}></input>
        <span className='NameError'>{this.state.priceErrorText}</span>
      </div>
      <div className='EditURL'>
        <label>URL</label>
        <input defaultValue={this.props.icesCard[0].url}></input>
      </div>
      <div className='EditQuantity'>
      <label>Quantity</label>
        <input defaultValue={this.props.icesCard[0].count}></input>      
      </div>
      <input className='EditCardSave' type='button' value='Save' disabled={!this.state.isValid}></input>
      <input className='EditCardCancel' type='button' value='Cancel'></input>

      </div>
      )

   
      
  
    }

    


}
export default EditCard;
