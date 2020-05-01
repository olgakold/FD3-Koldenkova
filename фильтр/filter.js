
var Filter = React.createClass({

    displayName: 'Filter',    
    
    propTypes: {
        nameBut: React.PropTypes.string.isRequired,
        count: React.PropTypes.number,
        lines: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                nameLine: React.PropTypes.string.isRequired,
                isInputText: React.PropTypes.bool.isRequired,                
            })
        )
    },

    getInitialState: function() {
        return { 
          count: 1,
          lines: this.props.lines,
          isChecked: false,
          value: '',
        };
      },

    InputFilterChange: function (EO){
       var InputText=EO.target.value;
       this.setState({value:InputText})
       this.state.lines.map (i=> {
           if (i.nameLine.indexOf(InputText)==-1) {
            i.isInputText=false;   
       }
       }
       )       
    },
    
    Alphabet: function (){
        this.setState({count:this.state.count+1});
        if (this.state.count%2==1){
            this.setState({isChecked:true});
            function compareNameLine(a,b) {
                if ( a.nameLine<b.nameLine )  return -1;
                if ( a.nameLine>b.nameLine )  return 1;
                return 0;
              }
            this.state.lines.sort(compareNameLine)

        }
        else {
            this.setState({isChecked:false});
            function compareCode(a,b){
                return a.code-b.code;
            }
            this.state.lines.sort(compareCode)
 
        }      
        

    },
        
    ResetAll: function (){
        this.setState({count:1});
        this.setState({isChecked:false});
        this.state.lines.map (i=> { 
             i.isInputText=true; 
        }
        )  
        function compareCode(a,b){
            return a.code-b.code;
        }
        this.setState({value:''})
        this.state.lines.sort(compareCode)
    },    
   

    render: function() {

        var optionsCode=[];
        this.state.lines.map (function(i){ 
            var optionCode=React.DOM.option ({className:'OptionFilter', hidden:!i.isInputText, key:i.code},i.nameLine)            
            optionsCode.push(optionCode)     
        })


        return React.DOM.div ({className: 'Filter'}, 
            React.DOM.input ({className:'CheckboxFilter', type: 'checkbox', checked:this.state.isChecked, onClick:this.Alphabet}),
            React.DOM.input ({className:'InputFilter', type:'text', value:this.state.value,onInput:this.InputFilterChange}, ),
            React.DOM.input ({className:'ButtonFilter', type:'button', value:this.props.nameBut,onClick:this.ResetAll}),
            React.DOM.select ({className:'SelectFilter', size:'6'},optionsCode)
        )
    }


})
