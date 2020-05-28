import React from 'react';


function withRainbowFrame (colors){
  


  return function(Component) {
    return function (props) {
    var elem=<Component {...props}/>
    var divArr=[] 
    for (var i=0;i<=colors.length-1;i++){                 
        elem=<div style={{border:"solid 4px "+colors[i], padding:"10px",  width:270+40*i, marginLeft:"6px"}}  key={i} children={elem}></div>           

    }
    divArr.push(elem)
    return  divArr
    
    }
  };
}

export  {withRainbowFrame};
