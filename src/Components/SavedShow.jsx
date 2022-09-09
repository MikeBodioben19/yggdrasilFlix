import React , {useState,useEffect} from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import {UserAuth} from '../Context/AuthContext'
import {db} from '../Firebase'
import {updateDoc, doc, onSnapshot} from 'firebase/firestore'



const SavedShow = () => {
    
    const user = UserAuth()
    const [movies, setMovies] = useState([])
    const slideLeft = () =>{
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    } 
    const slideRight = () =>{
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft  + 500;
    } 

    useEffect(() => {
        onSnapshot(doc(db , 'users', `${user?.email}`), (doc) =>{
            setMovies(doc.data()?.savedShows)
        })
    }, [user?.email])

  return (
    <>
      <h2 className="text-white font-bold p-4 md:text-xl">My Shows</h2>
      <div className="flex items-center relative group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden left-0 group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((item, index) => (
            <div className="w-[160px] inline-block cursor-pointer relative p-2 sm:w-[200px] md:w-[240px] lg:w-[280px] ">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
                className="w-full h-auto block "
              />
              <div className="absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal h-full text-xs flex justify-center items-center font-bold text-center text-white opacity-100 md:text-sm ">
                  {item?.title}
                </p>

              </div>
            </div>
          ))}
        </div>

        <MdChevronRight
          onClick={slideRight}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden right-0 group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}

export default SavedShow