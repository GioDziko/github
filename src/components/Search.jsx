import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import Followers from './Followers';
import './Css/search.css';
import GitPhoto from './Photos/gitPhoto.png'
import Toggle from './Toggle';

const Search=()=> {
    
    // const client_id='43dc76f11d784e8aea4d';
    // const client_secret='c3be2176acb314b350b8aea2871b18240dc8f70b';
 

    const [popularUsers,setpopularUsers] = useState([]);
    const [userLink,setuserLink] = useState(null);
    const fetchUsers= async()=>{
        try {
            const URL=`https://api.github.com/search/users?q=followers:%3E35000`
            const response = await fetch(URL);
            const result = response.json().then((res)=>{setpopularUsers(res); console.log(res.items)});
        } catch (error) {
          console.log(error)  
        }
      }
      const {items} = popularUsers;
      useEffect(() => {
        fetchUsers();
      }, [])
      
    return (
        <div className='home-page' >
            <img className='git-logo' src={GitPhoto} alt='Github logo' ></img>
            <h1>Profile Finder for Github</h1>
            <h3>Check out the Users public information just by one Click ! </h3>
            <div className="btn-container">
                <input id='input' onChange={(e)=>{setuserLink(e.target.value)}} type="text" name="" className="input-text" placeholder="Enter a Username..."/>
                <Link to={`/${userLink}/`} className="input-icon">
                    <i className="fas fa-search"></i>
                </Link>
            </div>
            <h1 className='popular-users-caption' >The most <span>Popular</span> users</h1>
            <h4 className='switch-caption' >switch the view</h4>
            <Toggle/>
            <div id='popular-users' className='popular-users'>
                {
                    items?
                    items.map((user,index)=>
                        <Followers key={index} data={user}/> 
                    ):null 
                }
            </div>
            <footer>Created by Giorgi Dzirkvelishvili</footer>
        </div>
    )
}

export default Search
