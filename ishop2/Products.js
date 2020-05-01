var Products=React.createClass ({

    displayName: 'Products',

    render: function (){
        var icesCode=[];
        var titleTab=React.DOM.tr({ },        
          React.DOM.td({className:'titleName'},'Name'),
          React.DOM.td({className:'titlePriceIce'},'Price'),
          React.DOM.td({className:'titleURLIce', }, 'URL'),
          React.DOM.td({className:'titleCount'},'Quantity'),
          React.DOM.td({className:'titleControl'},'Control'),      
          ) 
          icesCode.push(titleTab);
  
  
        this.props.products.forEach(function(i){
            
              var iceCode=React.DOM.tr({ },        
                  React.DOM.td({className:'NameIce'},i.nameice),
                  React.DOM.td({className:'PriceIce'},i.price),
                  React.DOM.td({className:'URLIce', }, React.DOM.a({className:'URLIce', href: i.url, target:'_blank'}, 'фото товара')),
                  React.DOM.td({className:'Count'},i.count),  
                  React.DOM.td({className:'Control'}, React.DOM.input({className:'buttonControl', type:'button', value:'Delete'})) 
                  )            
                  icesCode.push(iceCode);  
        })  

        return React.DOM.table( {}, React.DOM.tbody ({className:'Products'},icesCode) )

    },
})
