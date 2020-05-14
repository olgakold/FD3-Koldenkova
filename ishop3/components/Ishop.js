import React from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';

import Products from './Products';


class Ishop extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
  }

  getInitialState = () => {
    return { 
      isSelectedLineCode: 0,
      products: this.props.products,
           
    };
  }

  SelectedLine= (code) => {
    this.setState({isSelectedLineCode:code})    
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
            <tr>{icesCode}</tr>
          </tbody>
        </table>
      </div>
    )

    }
  }

  export default Ishop;