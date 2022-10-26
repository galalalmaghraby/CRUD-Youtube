import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const URL = 'http://localhost:8000'
    const {id} = useParams()

    const [user,setUser] = useState('')

    useEffect(()=>{
        axios.get(`${URL}/${id}`).then(res=>{
            setUser(res.data)
            console.log(user)
        })
    },[])

    const handleValueChange = e =>{
        e.preventDefault()
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleUpdate = e => {
        e.preventDefault()
        axios.put(`${URL}/${id}/update`,user).then(()=>{
            window.location.href = '/'
        })
    }
    
    const handleDelete = e =>{
        e.preventDefault()
        axios.delete(`${URL}/${id}`).then(()=>{
            window.location.href = '/'
        })
    }
  return (
    <div>
        <form>
                <input type="text" name="name" defaultValue={user.name} onChange={handleValueChange} />
                <input type="text" name="email" defaultValue={user.email} onChange={handleValueChange}  />
                <input type="text" name="phone" defaultValue={user.phone}  onChange={handleValueChange}  />
                <button type='submit'onClick={handleUpdate}>Update</button>
                <button type='submit' onClick={handleDelete}>Delete</button>

        </form>

    </div>
  )
}

export default User