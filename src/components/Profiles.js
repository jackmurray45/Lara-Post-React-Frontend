import React, {useState, useEffect} from 'react';
import API from '../API.js';

function Profiles() {

  useEffect(() => {
    fetchProfiles();
  }, []);

  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = async () => {
    const api = new API();
    api.createEntity({name: 'profiles'});
    const profiles = await api.endpoints.profiles.getAll();
    setProfiles(profiles.data);
  };


  return (
    <div>
        <h1>Profiles</h1>
        <div className="card-columns">
        {profiles.map(data => (
          <div key ={data.id} className="card">
            <div className="avatar-circle">
              <span className="initials">{data.name.charAt(0)}</span>
            </div>
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">{data.bio}</p>
              <a href="#" className="btn btn-outline-secondary btn-purple">View Profile</a>
            </div>
          </div>
          
        ))}
        </div>
    </div>
  );
}

export default Profiles;
