var IShop = React.createClass({

    displayName: 'IShop',
  
    render: function() {  

      var icesCode=this.props.products.map( i =>
      React.createElement(Products, {key:i.code, nameice:i.nameice, price:i.price, count:i.count, url:i.url, foto:i.foto} )
    ); 
      return React.DOM.div( {className:'IShop'}, 
      React.DOM.div( {className:'NameStore'}, this.props.name ),
      React.DOM.table ({className:'df'},React.DOM.tbody({className:'xcx'}, icesCode)),
    );
  },
    
});
