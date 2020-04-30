

var Filter = React.createClass({

    displayName: 'Filter',    
    
    propTypes: {
        nameBut: React.PropTypes.string.isRequired,
        lines: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                nameLine: React.PropTypes.string.isRequired,
                isInputText: React.PropTypes.bool.isRequired
            })
        )
    },

   

    InputFilterChange: function (EO){
       var InputText=EO.target.value;
       this.props.lines.map (i=> {
           if (i.nameLine.indexOf(InputText)==-1) {
            i.isInputText=false;   
            this.setState({})
       }
       }
       )
       
    },
           
        
        
   

    render: function() {

        var optionsCode=[];
        this.props.lines.map (function(i){ 
            var optionCode=React.DOM.option ({className:'OptionFilter', hidden:!i.isInputText},i.nameLine)            
            optionsCode.push(optionCode)     
        })


        return React.DOM.div ({className: 'Filter'}, 
            React.DOM.input ({className:'CheckboxFilter', type: 'checkbox'}),
            React.DOM.input ({className:'InputFilter', type:'text', onInput:this.InputFilterChange}, ),
            React.DOM.input ({className:'ButtonFilter', type:'button', value:this.props.nameBut}),
            React.DOM.select ({className:'SelectFilter', size:'6'},optionsCode)
        )
    }


})
