import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_item_list';
//api key for youtube
const API_KEY='AIzaSyBmZM8VcBK2UV-CoOk4bhAeIfhtNvscWBQ';

// create a component which will produce HTML
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            videos:[]
        }
        YTSearch({key:API_KEY,term:'Vishant'},(data)=>{
            this.setState({videos:data});
            console.log(data);
        })
            
    }
    render(){
        return(
            <div>
                <SearchBar/>
                <VideoList videoList={this.state.videos}/>
            </div>
            
        );
    }
        
}


// insert that component's HTML into DOM

ReactDOM.render(<App />,document.getElementById('root'));