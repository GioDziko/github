import React,{useEffect,useState} from 'react'
import './Css/followers.css';

// popularUsers maqvs shenaxuli is infromacia rac mchirdeba

// https://api.github.com/users/GioDziko/repos?per_page=1   Public repos

const Followers = ({data}) => {
    
    const client_id='43dc76f11d784e8aea4d';
    const client_secret='c3be2176acb314b350b8aea2871b18240dc8f70b';
    const [popularUsers,setpopularUsers] = useState([]);
    const [repos,setrepos]=useState(['']);

    const fetchUsers= async()=>{  
        const URL=data.url;  
        const response = await fetch(URL);
        const result = response.json().then((res)=>{setpopularUsers(res); console.log(res)});   
    }
    
    const fetchUsersrepos= async()=>{  
        const URL = `https://api.github.com/users/${data.login}/repos?per_page=3`
        const response = await fetch(URL);
        const result = response.json().then((res)=>{setrepos(res); console.log(res)});   
    }


    useEffect(() => {
        fetchUsers();
        fetchUsersrepos();
    },[])
    return (
        <div className='followers-container' >
            <img src={popularUsers.avatar_url} ></img>
            <p>name: <a target='blank' href={`https://github.com/${popularUsers.login}`}> {popularUsers.name} </a> </p>
            <p>type: {popularUsers.type}</p>
            <p> Public repos: { repos.map((user , index)=><span key={index} >{user.name}</span>)}</p>
        </div>
    )
}

export default Followers
