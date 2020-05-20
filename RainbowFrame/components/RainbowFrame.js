import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };
  

render() {
    var n=this.props.colors.length
    var divArr=[]     
    var elem=<div>{this.props.children}</div>
    for (var i=1;i<=n;i++){                 
        elem=<div style={{border:"solid 4px "+this.props.colors[i],padding:"10px",  width:40*i, marginLeft:"6px"}}  key={i} children={elem}></div>           

    }
    divArr.push(elem)


    return(  
     <div>
     {divArr}
     </div> 
     
        )    
      }
}
export default RainbowFrame;
