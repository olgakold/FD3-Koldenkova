var IShop = React.createClass({

    displayName: 'IShop',
  
    render: function() {  
                 
      
      return React.DOM.div( {className:'IShop'}, 
      React.DOM.div( {className:'NameStore'}, this.props.name ),
      React.DOM.createElement(Products),
    );
  },
    
});
