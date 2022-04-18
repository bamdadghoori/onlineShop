import React from 'react'

import Lot from './lot'

import LotDetails from './lotDetails'
import {Outlet,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'

 const Home = ({Lots}:{Lots:Array<any>}) => {
  //  const [count,setCount]=useState();
  console.log(Lots)
   const [lots,setLots]:Array<any>=useState([]);
   const navigate=useNavigate();
   

  useEffect(()=>{
    setLots(Lots)
  },[Lots])
  // const [cLot,setCLot]=useState({
  //   id:0,
  //   name:"" ,
  //   count:0,
  //   description:"",
  //   imgUrl:""
  // })
  // handleSubmit=()=>{

  // }
  return (
    
      <>
      {console.log(Lots)}
      <Outlet/> 
      <button className="btn btn-primary" onClick={()=>{navigate("./lotDetails")}}>
      Add Lot
    </button>
      {console.log(lots)}
      <div className="container">
        <div className="lots-container row">
       {lots.map((el:any,i:number)=>{
         return  ( <>
         
        
        {el.title && (
        <>
      <Lot lot={el}/>
        
        </>
        )}
        
        
        
       
        
         </>
       )
       })}
    </div>
        </div>
  
    </>
     
  )
}


export default Home;

