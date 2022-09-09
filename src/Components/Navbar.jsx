import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {UserAuth} from '../Context/AuthContext'
import {auth} from '../Firebase'

const Navbar = () => {
  const {user,logOut} = UserAuth()
  // console.log(user.email);
  const navigate = useNavigate()


  const handleLogout = async () =>{
    try{
      await logOut()
      navigate ('/')
      console.log("error");
    }catch (error){
      console.log(error)
    }
  }

  return (
    <div className ='flex items-center justify-between p-4 z-[100] absolute w-full '>
        <Link to ='/'>
      <h1 className='text-red-600 text-2xl md:text-4xl font-bold cursor-pointer '>YGGDRASILFLIX</h1>
        </Link>

      {user?.email ?<div>
        <Link to ='/account'>

        <button className='pr-4 text-white'>Account</button>
        </Link>
        

        <button onClick={handleLogout} className='bg-red-600 text-white rounded cursor-pointer px-6 py-2'>Logout</button>
        
          </div> : 
            <div>
            <Link to ='/login'>

            <button className='pr-4 text-white'>Sign In</button>
            </Link>
            <Link to ='/signup'>

            <button className='bg-red-600 text-white rounded cursor-pointer px-6 py-2'>Sign Up</button>
            </Link>
          </div>
      }
    </div>
  )
}

export default Navbar