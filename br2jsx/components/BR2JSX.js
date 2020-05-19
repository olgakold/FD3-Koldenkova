
import React from 'react';
import PropTypes from 'prop-types';
import './BR2JSX.css';

class BR2JSX extends React.Component {

  static propTypes = {
     text:  PropTypes.string.isRequired
  }
 
  render (){
    var NewArr=[]
    var items=this.props.text.split(/<br ?\/?>/)
    for (var i=0; i<items.length; i++){       
       if (i!=items.length-1){
        NewArr.push(items[i], <br />)
       }
       else{
         NewArr.push(items[i] )
       }
       
    }
    
    NewArr.push(<br />)
    
    return(
      <div className='BR2JSX' style={{backgroundColor: "olive"}}>
        
      {NewArr}
     
   
      
    </div>  
    )
}
}





export default BR2JSX;