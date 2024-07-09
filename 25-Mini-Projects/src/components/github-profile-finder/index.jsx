import React, { useEffect, useState } from "react";
import User from "./user";
import './styles.css';

export default function GithubProfileFinder(){
    const [userName,setUserName] = useState('Ashikpoojary');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchGithubUserData(){
        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json();
        if(data){
            setUserData(data)
            setLoading(false)
        }
        console.log(data);
    }

    function handleSubmit(){
        fetchGithubUserData();
    }

    useEffect(() => {
        fetchGithubUserData()
    },[])

    if(loading){
        return <h1>Loading data ! Please wait</h1>
    }

    return ( 
    <div className="github-profile-container"> 
        <div className="input-wrapper">
            <input
            name="search-by-username"
            type="text"
            placeholder="Search Github Username..."
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            />
            <button onClick={handleSubmit}>
                Search
            </button>
        </div>
        {
            userData !== null ? <User user={userData} /> :null
        }
    </div>
    )
}