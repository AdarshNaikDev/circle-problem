import React,{useEffect,useState} from 'react'
import axios from 'axios'

function Component2() {
    const[arrData, setarrData] = useState([]);
useEffect(()=>{
    readAPI();
    
    
},[])


const readAPI = async()=>{
    const response = await axios.get('https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    let arr = response.data.meals[0];
    setarrData(arr);
    console.log(arr)
  }

  return (
    <>
    <div className='card'>
        <img className='card-img' src={arrData.strMealThumb}/>
    <h3>
        Item Id: {arrData && arrData.idMeal}
    </h3>
    <h3>
        Meal Name:
    {arrData && arrData.strMeal}
    </h3>
    <h3>
        Category:
    {arrData && arrData.strCategory}
    </h3>
    <h3>
        Area:
    {arrData && arrData.strArea}
    </h3>

    </div>
    
    
    </>
    
  )
}

export default Component2