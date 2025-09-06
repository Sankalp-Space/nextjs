import React from 'react'

const id = ({params}:{params:{id:number,username:string}}) => {
    const {id}=params;
    const {username}=params;
  return (
    
    <div>
        <h1>the {id}  of the {username} 

        </h1>
    </div>
  )
}

export default id
