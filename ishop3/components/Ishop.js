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
    isEdit: PropTypes.bool
  }

  state = {
    products: this.props.products,
   
  }
  


  SelectedLine= (code) => {
    this.setState({isSelectedLineCode:code, isEdit: false}) 
    
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
    this.setState({isEdit:true})
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
    /> )

    let iceCardArr=this.state.products.filter(i => this.state.isSelectedLineCode==i.code)
 
    
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
        <input className='IShopButNew'type='button' value='New product'></input>
        
        { ((iceCardArr.length>0)&&(!this.state.isEdit))&&      
          <IceCard  
            icesCard={iceCardArr}
          /> 
        }
        {((iceCardArr.length>0)&&(this.state.isEdit))&&      
          <EditCard  
            icesCard={iceCardArr}
          /> 
        }


      </div>
    )

    }
  }

  export default Ishop;
