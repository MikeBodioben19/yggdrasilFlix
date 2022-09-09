import React, {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {UserAuth} from '../Context/AuthContext'
import {auth} from '../Firebase'


const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {user,logIn} = UserAuth()
  const navigate = useNavigate ()
  const handleSubmit = async (e) => {
      e.preventDefault()
      setError('')
      try{
          await logIn (email,password)
          navigate ('/')
      } catch (error){
          console.log(error);
          setError(error.message)
      }
  }
  return (
    <>
                <div className="w-full h-screen">
            <img
                className='hidden absolute w-full h-full object-cover sm:block'
                 src="https://assets.nflxext.com/ffe/siteui/vlv3/c8c8a0ad-86d6-45f1-b21d-821afa4e5027/3e9bfe33-ad2b-4460-8237-3141d6c80392/CM-en-20220801-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" />
                <div className="w-full  bg-black/60 fixed top-0 left-0 h-screen "></div>
                <div className="fixed w-full py-24 px-4  z-50">
                    <div className="mx-auto max-w-[450px] h-[600px] bg-black/70 text-white">
                        <div className="mx-auto max-w-[320px] py-16">
                            <h1 className="font-bold text-3xl">Sign In</h1>
                            {error? <p className='p-3 bg-red-400 my-2'>{error}</p>: null}
                            <form onClick={handleSubmit} className='flex flex-col w-full py-4 '>
                                <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-500 rounded' type="email" placeholder='Email' autoComplete='email' />
                                <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-500 rounded' type="password" placeholder='Password' autoComplete='current-password' />
                                <button className='bg-red-600 text-white py-3 my-6 rounded font-bold'>Sign In</button>
                                <div className="flex justify-between items-center text-sm text-gray-600">
                                    <p><input type="checkbox" name="remember me" className='mr-2' id="remember me" />Remember me</p>
                                    <p>Need Help?</p>
                                </div>
                                <p className="py-8"><span className='text-gray-600'>New to Yggdrasil-Flix?</span>{' '} <Link to ='/signup'> Sign Up</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default LogIn