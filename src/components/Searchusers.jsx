import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import './Css/searchedUsers.css';


const client_id='43dc76f11d784e8aea4d';
const client_secret='c3be2176acb314b350b8aea2871b18240dc8f70b';


const fetchUsers= async(user)=>{
  const url=`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`;
  const response = await fetch(url);
  return response.json();
}


const Searchusers = ({username })=>{
  
    const [Data,setData]=useState({});
    const [repository,setrepository]=useState([]);
    const [organization,setOrganization]=useState([]);

    const showData=()=>{
       try {
      
            fetchUsers(username).then((res)=>{
                setData(res);
                console.log(res);
            })  
        
       } catch (error) {
         console.log(error);  
       }
        
    }
    const repos= async()=>{  
        try {
            const url = `https://api.github.com/users/${username}/repos?per_page=3`
            const response = await fetch(url);
            const result = response.json().then((res)=>{setrepository(res); console.log(res)});      
        } catch (error) {
            console.log(error);
        }
    }
   
    const fetchOrganization= async()=>{  
        try { 
            const link_1 = `https://api.github.com/users/${username}/orgs`
            const response_1 = await fetch(link_1);
            const finaldata = response_1.json().then((res)=>{setOrganization(res); console.log(res)});   
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        showData();
        repos();
        fetchOrganization();
    }, [])

    const {login , public_repos  , message , avatar_url , followers,following} = Data;
     return (
        
        <div className='searchedUsers' >
            {login !== undefined ? 
            <div className='searchedUsers-info' >
                <h1 className='most-important-user' >The most important information about User</h1>
                <img src={avatar_url} ></img>
                <div className='info-container' >
                    <p>Name: {login}</p>
                    <p>Public repos number: {public_repos}</p>
                    <p>followers Number: {followers}</p>
                    <p>following Number: {following}</p>
                    <p>Organization: { organization.length=== 0 ? ' no organization':organization[0].login}</p>
                    <p> Public repos: {repository.length !== 0 ? repository.map((user,index)=><span key={index} >{user.name}</span>):null}</p>
                </div>
                <div className='home-btn-container' >
                    <button className='home-btn' ><Link className='home-link' to='/'>Home page</Link></button>
                </div> 
            </div>
            : <div>
                <p className='error' >404 Error</p>
                <p className='not-exist' >Unfortunately this User does not exist </p>
                <div className='home-btn-container error-btn' >
                    <button className='home-btn' ><Link className='home-link' to='/'>Home page</Link></button>
                </div>
            
            </div>}
            
        </div>

    )
        
} 
export default Searchusers

