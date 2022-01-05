import React from 'react';
import Log from '../components/Log';
import axios from 'axios';

const Profil = () => {
    return (
        <div className="profil-page">
           <div className="log-container">
               <Log signin={false} signup={false}/>
               <div className='img-container'>
               <img src="./img/SNW.jpg" alt="img-log" />
               </div>
           </div>
        </div>
    );
};

export default Profil;