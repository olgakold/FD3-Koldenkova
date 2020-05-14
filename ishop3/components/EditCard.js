import React from 'react';
import PropTypes, { number } from 'prop-types';

import './EditCard.css';


class EditCard extends React.Component {

    static propTypes = {
        icesCard: PropTypes.array.isRequired,   
        nameErrorText: PropTypes.string,
        priceErrorText: PropTypes.string,
        urlErrorText: PropTypes.string,
        countErrorText: PropTypes.string,
        isValidName: PropTypes.bool,
        isValidPrice: PropTypes.bool,
        isValidURL: PropTypes.bool,
        isValidCount: PropTypes.bool
    }

    state ={
        icesCard: this.props.icesCard,
        nameErrorText: '',
        priceErrorText: '',
        urlErrorText: '',
        countErrorText: '',
        isValidName: true,
        isValidPrice: true,
        isValidURl: true,
        isValidCount: true

    }
ChangeNameText = (EO) =>{
    var currentValue=EO.target.value
    if (currentValue==""){
       this.setState({nameErrorText:'Error', isValidName:false})
       
    }
    else {
        var NewIcesCard=this.state.icesCard.slice()
        NewIcesCard[0].nameice=currentValue
        this.setState({nameErrorText:'', isValidName:true, icesCard:NewIcesCard})
    }
    this.setState({value: currentValue})
}
ChangePriceText = (EO) =>{
    var currentValue=EO.target.value

    if (currentValue==""||isNaN(currentValue)){
      this.setState({priceErrorText:'Error', isValidPrice:false})       
   }

    if (currentValue!=""&&!isNaN(currentValue)) {
      var NewIcesCard=this.state.icesCard.slice()
      NewIcesCard[0].price=currentValue
      this.setState({priceErrorText:'', isValidPrice:true, icesCard:NewIcesCard})
    }
    this.setState({value: currentValue})
}

ChangeURLText = (EO) =>{
  var currentValue=EO.target.value
  if (currentValue==""){
     this.setState({urlErrorText:'Error', isValidURL:false})
     
  }
  else {
      var NewIcesCard=this.state.icesCard.slice()
      NewIcesCard[0].url=currentValue
      this.setState({urlErrorText:'', isValidURL:true, icesCard:NewIcesCard})
  }
  this.setState({value: currentValue})
}

ChangeCountText = (EO) =>{
  var currentValue=EO.target.value
  if (currentValue==""||isNaN(currentValue)){
    this.setState({countErrorText:'Error', isValidCount:false})       
 }

  if (currentValue!=""&&!isNaN(currentValue)) {
    var NewIcesCard=this.state.icesCard.slice()
    NewIcesCard[0].count=currentValue
    this.setState({countErrorText:'', isValidCount:true, icesCard:NewIcesCard})
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
        <div className='Error'>{this.state.nameErrorText}</div>
      </div>
      <div className='EditPrice'>
      <label>Price</label>
        <input defaultValue={this.props.icesCard[0].price} onChange={this.ChangePriceText}></input>
        <div className='Error'>{this.state.priceErrorText}</div>
      </div>
      <div className='EditURL'>
        <label>URL</label>
        <input defaultValue={this.props.icesCard[0].url} onChange={this.ChangeURLText}></input>
        <div className='Error'>{this.state.urlErrorText}</div>        
      </div>
      <div className='EditQuantity'>
      <label>Quantity</label>
        <input defaultValue={this.props.icesCard[0].count} onChange={this.ChangeCountText}></input>    
        <div className='Error'>{this.state.countErrorText}</div>              
      </div>
      <input className='EditCardSave' type='button' value='Save' disabled={(!this.state.isValidName||!this.state.isValidPrice)||(!this.state.isValidURL||!this.state.isValidCount)}></input>
      <input className='EditCardCancel' type='button' value='Cancel'></input>

      </div>
      )

   
      
  
    }

    


}
export default EditCard;
