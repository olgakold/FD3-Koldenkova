import React from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';

import Products from './Products';
import IceCard from './IceCard';

class Ishop extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
    isSelectedLineCode: PropTypes.number,
    isSelectedIce: PropTypes.bool
  }

  state = {
    products: this.props.products,
    isSelectedIce: false
  }



  SelectedLine= (code) => {
    this.setState({isSelectedLineCode:code}) 
    this.setState({isSelectedIce: true})     
  }

  DeleteLine = (code) => {
    this.setState({isSelectedLineCode:code})
    var question=confirm('Вы хотите удалить этот товар?')  
    alert (question)
    if (question==true){
    let NewStateArr=this.state.products.filter( i=> code!=i.code )
    this.setState({products:NewStateArr}, ) 
  
    }
      
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
        {      
        (this.state.isSelectedIce)&&
        <IceCard  
          nameice={iceCardArr[0].nameice} 
          price={iceCardArr[0].price} 
          url={iceCardArr[0].url} 
          count={iceCardArr[0].count} 
          foto={iceCardArr[0].foto} 
           
        />

        

        }
        
      </div>
    )

    }
  }

  export default Ishop;
