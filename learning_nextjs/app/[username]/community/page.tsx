import React from 'react'

const community = ({params}:{params:{username:string}}) => {
    const {username}=params;
  return (
    
    <div>
        <h1>{username}    community Page</h1>
    </div>
  )
}

export default community
