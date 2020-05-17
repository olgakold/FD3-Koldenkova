import React from 'react';
import PropTypes from 'prop-types';

import './EditCard.css';

class EditCard extends React.Component {

    static propTypes = {
        iceCode: PropTypes.number,
        icesCard: PropTypes.array.isRequired,   
        nameErrorText: PropTypes.string,
        priceErrorText: PropTypes.string,
        urlErrorText: PropTypes.string,
        countErrorText: PropTypes.string,
        isValidName: PropTypes.bool,
        isValidPrice: PropTypes.bool,
        isValidURL: PropTypes.bool,
        isValidCount: PropTypes.bool,
        cbChange: PropTypes.func,
        workMode: PropTypes.number,
        cbNewIce: PropTypes.func,
        
    }
    
    state ={
      icesCard:this.props.icesCard,
      nameErrorText: this.props.nameErrorText,
      priceErrorText: this.props.priceErrorText,
      urlErrorText: this.props.urlErrorText,
      countErrorText: this.props.countErrorText,
      isValidName: this.props.isValidName,
      isValidPrice: this.props.isValidPrice,
      isValidURL: this.props.isValidURL,
      isValidCount:this.props.isValidCount,
      
  }
ChangeNameText = (EO) =>{
  
    this.props.cbChange()
    var currentValue=EO.target.value
    if (currentValue==""){
       this.setState({nameErrorText:'Please, fill the field', isValidName:false})       
    }
    else {        
        this.setState({nameErrorText:'', isValidName:true, nameIsChanged: currentValue})        
      }       
}

ChangePriceText = (EO) =>{
    this.props.cbChange()
    var currentValue=EO.target.value
    if (currentValue==""||isNaN(currentValue)){
      this.setState({priceErrorText:'Please, fill the field.Value must be a number', isValidPrice:false})       
   }
    if (currentValue!=""&&!isNaN(currentValue)) {
      this.setState({priceErrorText:'', isValidPrice:true, priceIsChanged: currentValue})      
    }
}

ChangeURLText = (EO) =>{
  this.props.cbChange()
  var currentValue=EO.target.value
  if (currentValue==''){
     this.setState({urlErrorText:'Please, fill the field', isValidURL:false})     
  }
  else {      
      this.setState({urlErrorText:'', isValidURL:true, urlIsChanged: currentValue})      
  }
}

ChangeCountText = (EO) =>{
  this.props.cbChange()
  var currentValue=EO.target.value
  if (currentValue==""||isNaN(currentValue)){
    this.setState({countErrorText:'Please, fill the field.Value must be a number', isValidCount:false})       
 }

  if (currentValue!=""&&!isNaN(currentValue)) {
    this.setState({countErrorText:'', isValidCount:true, countIsChanged: currentValue})    
  }
}

SaveCard = () =>{
  this.props.cbSave(this.state)
  var NewArrIce=this.props.icesCard
  this.state.nameIsChanged?NewArrIce[0].nameice=this.state.nameIsChanged:NewArrIce[0].nameice=this.props.icesCard[0].nameice;
  this.state.priceIsChanged?NewArrIce[0].price=Number(this.state.priceIsChanged):NewArrIce[0].price=this.props.icesCard[0].price;
  this.state.urlIsChanged?NewArrIce[0].url=this.state.urlIsChanged:NewArrIce[0].url=this.props.icesCard[0].url;
  this.state.countIsChanged?NewArrIce[0].count=parseInt(this.state.countIsChanged):NewArrIce[0].count=this.props.icesCard[0].count;
}
AddCard = () =>{
  var NewArrIce={key:this.props.iceCode+1, code:this.props.iceCode+1,nameice:this.state.nameIsChanged, price:Number(this.state.priceIsChanged), count:parseInt(this.state.countIsChanged),url:this.state.urlIsChanged, foto:'фото товара'}
  this.props.cbNewIce(NewArrIce)
  
}

CancelCard = () =>{   
  this.props.cbCancel()
}

render (){
    if (this.props.workMode==1){

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
      <input className='EditCardSave' onClick={this.SaveCard} type='button' value='Save' disabled={(!this.state.isValidName||!this.state.isValidPrice)||(!this.state.isValidURL||!this.state.isValidCount)}></input>
      <input className='EditCardCancel' onClick={this.CancelCard} type='button' value='Cancel'></input>

      </div>
      )  
    }
    
    if (this.props.workMode==2) {
      return ( 
        
        <div className='EditCard'>
        <h3 className='NameIceCard'>Add new Product</h3>
        <div className='EditId'>ID: {this.props.iceCode+1}</div>
        <div className='EditName'>
        <label>Name</label>
        <input defaultValue='' onChange={this.ChangeNameText}></input>
        <div className='Error'>{this.state.nameErrorText}</div>
        </div>
        <div className='EditPrice'>
      <label>Price</label>
        <input defaultValue='' onChange={this.ChangePriceText}></input>
        <div className='Error'>{this.state.priceErrorText}</div>
      </div>
      <div className='EditURL'>
        <label>URL</label>
        <input defaultValue='' onChange={this.ChangeURLText}></input>
        <div className='Error'>{this.state.urlErrorText}</div>        
      </div>
      <div className='EditQuantity'>
      <label>Quantity</label>
        <input defaultValue='' onChange={this.ChangeCountText}></input>    
        <div className='Error'>{this.state.countErrorText}</div>              
      </div>
      <input className='EditCardAdd' onClick={this.AddCard} type='button' value='Add' disabled={(!this.state.isValidName||!this.state.isValidPrice)||(!this.state.isValidURL||!this.state.isValidCount)}></input>
      <input className='EditCardCancel' onClick={this.CancelCard} type='button' value='Cancel'></input>




        </div>
        )  
    }
   
    }
}
export default EditCard;
