import React,{Component} from 'react';
import Searchusers from './Searchusers';
import Search from './Search';

export default class Home extends Component {
    render(){
        const username=(this.props.match.params.username)?this.props.match.params.username:null;
        console.log(username);
        
        return(
            <div> 
                {username === null ? <Search /> : <Searchusers username={username} user=''/> } 
            </div>
        )
    }

}
