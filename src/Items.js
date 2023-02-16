import React from 'react'




const Items = ({country, city, name, dateOfBirth}) => {
  
   return (
    
    <div id="sd-app">
            <div className='sd-item'>
            <p className='sd-desc'>{country}</p>
            <p className='sd-desc'>{city}</p>
            <p className='sd-desc'>{name}</p>
            <p className='sd-desc'>{dateOfBirth}</p>
        </div>
    </div>
    
  )
}

export default Items