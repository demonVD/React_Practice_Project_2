import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_item_list';
import VideoDetails from './components/video_details';
//api key for youtube
const API_KEY='AIzaSyBmZM8VcBK2UV-CoOk4bhAeIfhtNvscWBQ';

// create a component which will produce HTML
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            videos:[]
        }
        YTSearch({key:API_KEY,term:'foo fighters'},(data)=>{
            this.setState({videos:data});
            console.log(data);
        })
            
    }
    render(){
        return(
            <div>
                <div><SearchBar/></div>
                <div><VideoDetails video={this.state.videos[0]}/></div>
                <div><VideoList videoList={this.state.videos}/></div>
                
                
            </div>
            
        );
    }
        
}


// insert that component's HTML into DOM

ReactDOM.render(<App />,document.getElementById('root'));