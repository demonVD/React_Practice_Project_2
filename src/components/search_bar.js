import React,{Component} from 'react';


//component that will produce HTML

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={ video_name:'foo fighters'}
    }
    render() {
        return (
            <div>
                 <input value={this.state.video_name}
                 onChange={this.onInputChange}/><br/>
                 Value of the input:{this.state.video_name}
            </div>
        );
    }
    onInputChange=(event) => {
        //console.log(this.state.video_name);
        this.setState({video_name:event.target.value});
        //console.log(this.state.video_name);
    }
}

//event handler for input tag


//export the component so that the other components can use this component

export default SearchBar;