import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify'

const Card = ({course, likedCourses, setLikedCourses}) => {

    function likeHandler (){
        if(likedCourses.includes(course.id)){
            // it mean course like already so filter it
            setLikedCourses(
                (prev) => prev.filter((cid) => (cid !== course.id))
            )
            toast.warning("Like Removed");
        }
        else{
            // course it not liked
            // insert the course in liked course
            if(likedCourses.length === 0){
                setLikedCourses([course.id])
            }
            else{
                setLikedCourses((prev) => [...prev, course.id])
            }
            toast.success("Liked Successfully")
        }
    }

  return (
    <div className='w-[300px] bg-bgDark rounded-sm overflow-hidden bg-opacity-70  transition-all duration-500'>
        <div className='relative'>
            <img src={course.image.url} alt={course.image.alt}/>
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] flex justify-center '>
                <button onClick={likeHandler}>
                {
                    likedCourses.includes(course.id) ? (<FcLike className='text-[1.75rem]'/>) : (<FcLikePlaceholder className='text-[1.75rem]'/>)
                }
                    
                </button>
            </div>
        </div> 

        <div className='p-4 '>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>
                {
                    course.description.length > 100 ?
                    `${(course.description.substr(0, 100))}...` : (course.description)
                }
            </p>
        </div>

    </div>
  )
}

export default Card