var Products=React.createClass ({

    displayName: 'Products',

    render: function (){
    


        return React.DOM.tr({key:this.props.code,className:'Product'},   
        React.DOM.td({className:'NameIce'},this.props.nameice),
        React.DOM.td({className:'PriceIce'},this.props.price),
        React.DOM.td({className:'URL'}, React.DOM.a({className:'URLIce', href:this.props.url, target:'_blank'}, this.props.foto)),
        React.DOM.td({className:'Count'},this.props.count),
        React.DOM.td({className:'dfdf'}, React.DOM.input({className:'dsaw',type:'button', value:'Delete'},))
      );

    },
})
