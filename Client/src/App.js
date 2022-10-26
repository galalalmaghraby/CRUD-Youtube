import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Index from './components/Index'
import AddForm from './components/AddForm'
import axios from 'axios'
import User from './components/User';

const App = () => {
  const URL = 'http://localhost:8000'

  const [users,setUsers] = useState('')
  useEffect(()=>{
    axios.get(`${URL}`).then((res)=>{
      setUsers(res.data)
    })
  },[])

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Index users={users} />} />
            <Route path='/:id' element={<User />} />
            <Route path='/add' element={<AddForm />} />

        </Routes>
    </BrowserRouter>
  )
}

export default App