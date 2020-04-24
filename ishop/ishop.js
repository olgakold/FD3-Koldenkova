var IShop = React.createClass({

    displayName: 'IShop',
  
    render: function() {
  
      var icesCode=[];
      this.props.products.forEach(function(i){
      var iceCode=        
      React.DOM.div({key:i.code,className:'Product'},   
      React.DOM.span({className:'NameIce'},i.nameice),
      React.DOM.span({className:'PriceIce'},', цена: '+i.price+', '),
      React.DOM.a({className:'URLIce', href: i.url, target:'_blank'}, 'фото товара'),
      React.DOM.span({className:'Count'},', остаток на складе: '+i.count),
      );
      icesCode.push(iceCode);
      })   
        
      
      return React.DOM.div( {className:'IShop'}, 
        React.DOM.div( {className:'NameStore'}, this.props.name ),
        React.DOM.div( {className:'Products'}, icesCode ),
      );
    },
    
});
