import React from 'react';
import '../App.css';

const ProfileC = ({fullName,bio,profession, handleName ,children}) => {

    handleName(`My name is Youcef Ouhab`)
    return(
        <div className='fullName'>
            {children}
            <div>
            <h3 className='h3Class'>Full Name:</h3>
            <label className='fname'>{fullName}</label>    
            <br></br>  
            {/* <br></br>       */}
            <h3 className='h3Class'>Bio:</h3>
            <label className='bio'>{bio}</label>
            <br></br>
            {/* <br></br>   */}
            <h3 className='h3Class'>Profession:</h3>
            <label className='profession'>{profession}</label>
            
            </div>
            
        </div>
    );
    
    }

    ProfileC.defaultProps = {
        fullName: "Full Name",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, enim doloribus quia voluptatibus odit minima sequi tempora commodi aliquam odio perferendis officia dolores cumque distinctio, minus architecto dolorem officiis corrupti!",
        profession: "None",
    };
    
    export default ProfileC;