import React from 'react'
import SavedShow from '../Components/SavedShow'

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
                  className='hidden absolute w-full h-[400px] object-cover sm:block'
                  src="https://assets.nflxext.com/ffe/siteui/vlv3/c8c8a0ad-86d6-45f1-b21d-821afa4e5027/3e9bfe33-ad2b-4460-8237-3141d6c80392/CM-en-20220801-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" />
            <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
            <div className="absolute top-[20%] p-4 md:p-8">
              <h1 className="text-3xl md:text-5xl">My Shows</h1>
            </div>
        </div>
        <SavedShow/>
    </>
  )
}

export default Account