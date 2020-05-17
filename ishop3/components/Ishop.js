import React from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';

import Products from './Products';
import IceCard from './IceCard';
import EditCard from './EditCard';



class Ishop extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
    isSelectedLineCode: PropTypes.number,
    isChange: PropTypes.bool,
    isInfo: PropTypes.bool,
    isNewIce: PropTypes.bool,
    workMode: PropTypes.number,
    nameErrorText: PropTypes.string,
    priceErrorText: PropTypes.string,
    urlErrorText: PropTypes.string,
    countErrorText: PropTypes.string,
    isValidName: PropTypes.bool,
    isValidPrice: PropTypes.bool,
    isValidURL: PropTypes.bool,
    isValidCount: PropTypes.bool,
  }

  state = {
    products: this.props.products,
    isChange: false,
    isInfo:true,
    isNewIce: false,
    workMode: 0
  }
  


  SelectedLine= (code) => {
    this.setState({isSelectedLineCode:code, isInfo:true, workMode:0}) 
  }



  DeleteLine = (code) => {    
    this.setState({isSelectedLineCode:code})      
    let question=confirm('Вы хотите удалить этот товар?')
    if (question==true){
      let NewStateArr=this.state.products.filter( i=> code!=i.code )    
      this.setState({products:NewStateArr}, ) 
      
    }     
  }


   EditLine = (code) => {
    this.setState({isSelectedLineCode:code},this.EditIce)       
   }

   EditIce = ()=>{
    this.setState({workMode:1, isValidName:true, nameErrorText: '',isValidPrice:true, priceErrorText: '',isValidURL:true, urlErrorText: '',isValidCount:true, countErrorText: ''})
    
   }

   ChangeCard = () =>{
     this.setState({isChange:true})     
   }

   SaveCard = () =>{
     this.setState({isChange:false, workMode:0})
   }

   CancelCard = () =>{
    this.setState({isChange:false, workMode:0, isInfo:false}) 
   }

   NewIce = () =>{
     this.setState({workMode:2,isValidName:false, nameErrorText: 'Please, fill the field',isValidPrice:false, priceErrorText: 'Please, fill the field.Value must be a number',isValidURL:false, urlErrorText: 'Please, fill the field.',isValidCount:false, countErrorText: 'Please, fill the field.Value must be a number'})
 
   }

    AddIce = (NewArrIce) =>{
    var NewArr=this.state.products.slice()
    NewArr.push(NewArrIce)
    this.setState({products:NewArr, isChange:false, workMode:0, isInfo:false})
    
  }


  render () {  

    
    var icesCode=this.state.products.map( i =>
    <Products key={i.code}
    code={i.code}
    nameice={i.nameice}
    price={i.price}
    count={i.count}
    url={i.url}
    foto={i.foto}
    cbSelected={this.SelectedLine}
    isSelected={this.state.isSelectedLineCode==i.code}
    cbDelete={this.DeleteLine}
    cbEdit={this.EditLine}
    isChange={this.state.isChange}
    /> )

    let iceCardArr=this.state.products.filter(i => this.state.isSelectedLineCode==i.code)
    let lastIceCode=Math.max.apply(null, (this.state.products.map(i =>i.code)))
    
    return (
      
      <div  className='IShop'>
        <div className='NameStore'>{this.props.name}</div>
        <table className='TableProd'>
          <tbody className='TbodyProd'>
            <tr className='TitleProduct'>
              <td  className='TitleNameIce'>Name</td>
              <td  className='TitlePriceIce'>Price</td>
              <td  className='TitleURL'>URL</td>
              <td  className='TitleQuantity'>Quantity</td>
              <td  className='TitleControl'>Control</td>
            </tr>
            {icesCode}               
          </tbody>           
        </table>
        <input className='IShopButNew' onClick={this.NewIce} type='button' value='New product' disabled={this.state.isChange} ></input>
        { ((iceCardArr.length>0)&&(this.state.workMode==0)&&(this.state.isInfo))&&      
          <IceCard  
            icesCard={iceCardArr}            
          /> 
        }
        {((this.state.workMode==1)||(this.state.workMode==2))&&      
          <EditCard  
            workMode={this.state.workMode}
            iceCode={lastIceCode}
            icesCard={iceCardArr}
            cbChange={this.ChangeCard}
            cbSave={this.SaveCard}
            cbCancel={this.CancelCard}
            cbNewIce={this.AddIce}
            isValidName={this.state.isValidName}
            isValidPrice={this.state.isValidPrice}
            isValidURL={this.state.isValidURL}           
            isValidCount={this.state.isValidCount}
            nameErrorText={this.state.nameErrorText}
            priceErrorText={this.state.priceErrorText}
            urlErrorText={this.state.urlErrorText}
            countErrorText={this.state.countErrorText}
          /> 
        }


      </div>
    )

    }
  }

  export default Ishop;
