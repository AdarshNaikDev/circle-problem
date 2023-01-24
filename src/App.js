import React,{useState} from 'react';
import './App.css';

function App() {
  const[totalCircle, setCircle] = useState([]);
  const[greyOut, setGrey] = useState(false);
  const [counter,setCounter] = useState(0)

  function addCircles(){
   
    setCircle([...totalCircle, {val:1, css:"circle-shape"}])
   // console.log(totalCircle)

  }

  function greyHandler (index){
    let newarr = [...totalCircle];
    if(newarr[index].css == "circle-shape" )
    {
      newarr[index].css = "circle-grey"
      setCounter(counter+1)
    }
    else{
      newarr[index].css = "circle-shape";
      setCounter(counter-1)
    }
    
    setCircle(newarr)

      //let  updatedArr = totalCircle[index].css="circle-grey"
      
      //setCircle([...totalCircle, updatedArr])
      


      //setCounter(counter+1);
      // console.log(totalCircle.length)
      
  }
  return (
    <>
    <div>
      <button onClick={addCircles}>
        Add Circle
      </button>
      <h2>Grey Color Count: {counter}</h2>
    </div>
    {
      totalCircle && totalCircle.map((item,index)=>{
          //{console.log(item)}
          return <div className={item.css && item.css == 'circle-shape' ? 'circle-shape' : 'circle-grey'} key={index} onClick={()=>greyHandler(index) } >

          </div>
      })
    }
    
    </>
    );
}

export default App;
