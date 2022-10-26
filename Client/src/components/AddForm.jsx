import axios from 'axios'
import React, { useState } from 'react'

const AddForm = () => {
    const URL = 'http://localhost:8000'
    const [user, setUser] = useState('')

    const handleValueChange = e => {
        e.preventDefault()
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handeAddUser = e => {
        e.preventDefault()
        axios.post(`${URL}/add`, user).then(res => {
            alert(res.data)
            window.location.href = '/'

        }).catch(err => {
            alert(err.response.data)
        })
    }
    return (
        <>
            <form onSubmit={handeAddUser}>
                <input type="text" name="name" onChange={handleValueChange} />
                <input type="text" name="email" onChange={handleValueChange} />
                <input type="text" name="phone" onChange={handleValueChange} />
                <button type='submit'> add </button>
            </form>
        </>
    )
}

export default AddForm