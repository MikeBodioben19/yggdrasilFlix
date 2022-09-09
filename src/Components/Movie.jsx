import React ,{useState} from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import {UserAuth} from '../Context/AuthContext'
import {db} from '../Firebase'
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'

const Movie = ({item}) => {
  const [like, setLike] = useState(false)
  const [saved, setSaved] = useState(false)
  const {user} = UserAuth()

  const movieID = doc(db, 'users' , `${user?.email}`)
  const saveShow = async () =>{
    if(user?.email){
      setLike(!like)
      setSaved(true)
      await updateDoc(movieID, {
        saveShows : arrayUnion({
          id : item.id,
          title : item.title,
          img : item.backdrop_path,
        })
      })
    }else{
      alert('Please log in to save a movie')
    }
  }
  
  return (
    <div className="w-[160px] inline-block cursor-pointer relative p-2 sm:w-[200px] md:w-[240px] lg:w-[280px] ">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
        className="w-full h-auto block "
      />
      <div className="absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal h-full text-xs flex justify-center items-center font-bold text-center text-white opacity-100 md:text-sm ">
          {item?.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
}

export default Movie