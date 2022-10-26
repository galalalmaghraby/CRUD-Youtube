import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Index = ({users}) => {
    const [currentUser, setCurrentUser ] = useState([])
    useEffect(()=>{
        setCurrentUser(users)
    })
  return (
    <>
       {
        currentUser?currentUser.map((user)=>{
            return(
                <a href={user._id} key={user._id}>id</a>
            )
        }):console.log(false)
       }
    </>
  )
}

export default Index