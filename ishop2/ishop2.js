var IShop = React.createClass({

  displayName: 'IShop',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    products: React.PropTypes.array.isRequired,
  },

  getInitialState: function() {
    return { 
      isSelectedLineCode: 0,
      
    };
  },

  SelectedLine: function(code){
    this.setState({isSelectedLineCode:code})
  },

  render: function() {  

    var icesCode=this.props.products.map( i =>
    React.createElement(Products, {key:i.code, code:i.code, nameice:i.nameice, price:i.price, count:i.count, url:i.url, foto:i.foto,cbSelected:this.SelectedLine, isSelected:(this.state.isSelectedLineCode==i.code)} )
  ); 
    return React.DOM.div( {className:'IShop'}, 
    React.DOM.div( {className:'NameStore'}, this.props.name ),
    React.DOM.table ({className:'TableProd'},React.DOM.tbody({className:'TbodyProd'}, 
    React.DOM.tr({key:this.props.code,className:'TitleProduct'},   
        React.DOM.td({className:'TitleNameIce'},'Name'),
        React.DOM.td({className:'TitlePriceIce'},'Price'),
        React.DOM.td({className:'TitleURL'}, 'URL'),
        React.DOM.td({className:'TitleCount'},'Quantity'),
        React.DOM.td({className:'TitleIShopButton'}, 'Control')
      ),   
    
    icesCode)),
  );
},
  
});