import React from "react";
import {apiUrl, filterData} from "./data"
import Cards from "./components/Cards"
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true);
  const [category ,setCategory] = useState(filterData[0].title)

  // useEffect(() =>{
  //   const fetchData = async () =>{
  //     try{
  //       const res = await fetch(apiUrl);
  //       const output = await res.json();
  //       //save data into a veri able
  //       setCourses(output.data)
  //     }

  //     catch(error){
  //       toast.error("Something went wrong")
  //     }
  //   }
  //   fetchData();
  // },[]);

  // Another Way of using the useEffect hook for API call :-
  const fetchData = async () =>{
        setLoading(true)
        try{
          const res = await fetch(apiUrl);
          const output = await res.json();
          //save data into a veri able
          setCourses(output.data)
        }
  
        catch(error){
          toast.error("Something went wrong")
        }
        setLoading(false)
      }
    
  useEffect(() =>{
    fetchData()
  }, [])
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
      <Navbar/>
      </div>
      <div className="bg-bgDark2">
          <div>
          <Filter filterData = {filterData} category={category} setCategory={setCategory}/>
          </div> 
          <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center h[50vh]">
            {
              loading ? (<Spinner/>) : (<Cards courses ={courses} category={category}/>)
            }        
          </div>
      </div>
    </div>
    );
};

export default App;
