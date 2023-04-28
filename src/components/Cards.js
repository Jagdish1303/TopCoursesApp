import React, { useState } from 'react'
import Card from "../components/Card"

const Cards = ({courses, category}) => {
    const [likedCourses, setLikedCourses] = useState([])
    //it returns you a list of all courses received from the api response
    function getCourses() {
        if(category === "All"){
            let allCourses = []
            Object.values(courses).forEach( (courseCategory) => {
                courseCategory.forEach((course) =>{
                    allCourses.push(course)
                })
            });
            return allCourses;
        }
        else{
            //i will show only the specific category array
            return courses[category];  
        }
    }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4 transition-all duration-500'>
        { getCourses().map((course) =>(
                <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
            ))
        }

    </div>
  )
}

export default Cards