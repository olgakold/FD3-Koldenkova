
var Filter = React.createClass({

    displayName: 'Filter',    
    
    propTypes: {
        nameBut: React.PropTypes.string.isRequired,
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
          lines: this.props.lines,
          isChecked: false,
          value: '',
        };
      },

    InputFilterChange: function (EO){
       var InputText=EO.target.value;
       this.setState({value:InputText})
       if (this.state.isChecked==true){
        let NewStateArr=this.props.lines.slice();
        function compareNameLine(a,b) {
            if ( a.nameLine<b.nameLine )  return -1;
            if ( a.nameLine>b.nameLine )  return 1;
            return 0;
          }
             
       let NewStateArrFilter =NewStateArr.sort(compareNameLine).filter( i=> i.nameLine.indexOf(InputText)!=-1 )
       this.setState({lines:NewStateArrFilter}, )  
       }

       else{
        let NewStateArrFilter =this.props.lines.filter( i=> i.nameLine.indexOf(InputText)!=-1 )
        this.setState({lines:NewStateArrFilter}, )  
       }
    },
    
    Alphabet: function (EO){    
    this.setState({isChecked:EO.target.checked});
    let NewStateArr=this.state.lines.slice();
    if (!this.state.isChecked){
        function compareNameLine(a,b) {
            if ( a.nameLine<b.nameLine )  return -1;
            if ( a.nameLine>b.nameLine )  return 1;
            return 0;
          }
        NewStateArr.sort(compareNameLine)
      }
    else{        
        function compareCode(a,b){
            return a.code-b.code;   }
        NewStateArr.sort(compareCode)
    }
    this.setState({lines:NewStateArr})

    },
        
    ResetAll: function (){
        this.setState({isChecked:false});
        this.setState({value:''})
        let NewStateArr=this.props.lines.slice();        
        function compareCode(a,b){
            return a.code-b.code;        }        
        NewStateArr.sort(compareCode)
        this.setState({lines:NewStateArr})

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