import React from 'react'

const channelPage = ({params}:{params:{username:string}}) => {
    const {username}=params;
  return (
    
    <div>
        <h1>{username}Channel Page</h1>
    </div>
  )
}

export default channelPage
