var Products=React.createClass ({

  displayName: 'Products',

  propTypes: {
      code: React.PropTypes.number.isRequired,
      isSelected: React.PropTypes.bool,
      isDelete: React.PropTypes.bool,
      nameice: React.PropTypes.string.isRequired,
      price: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired,
      foto: React.PropTypes.string.isRequired,
      count: React.PropTypes.number.isRequired,
  },




  LineClick: function(EO){
    this.props.cbSelected(this.props.code);      
  },

  ButtonClick: function(EO){
    if (this.props.isSelected){
      this.props.cbDelete(this.props.code)
    }
    
    
  },

  render: function (){  

      return React.DOM.tr({key:this.props.code, className:'Product', onClick:this.LineClick, style: {background: this.props.isSelected?'orange':'white'}      
    },   
      React.DOM.td({className:'NameIce'},this.props.nameice),
      React.DOM.td({className:'PriceIce'},this.props.price),
      React.DOM.td({className:'URL'}, React.DOM.a({className:'URLIce', href:this.props.url, target:'_blank'},this.props.foto)),
      React.DOM.td({className:'Count'},this.props.count),
      React.DOM.td({className:'IShopButton'}, React.DOM.input({className:'IShopBut',type:'button', value:'Delete', onClick:this.ButtonClick},))
    );

  },
})
