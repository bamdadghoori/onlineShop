import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AddLotToBasket } from '../redux/lots/Actions'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup';
 const Lot = ({lot}:{lot:any}) => {
   let schema=yup.object().shape({
     count:yup.number().typeError("عددی وارد کنید").required("عددی وارد کنید").min(1)
   })
   
   const navigate=useNavigate();
     const [count,setCount]=useState(0)
     const [errors,setErrors]=useState([])
    
     const dispatch= useDispatch();
     useEffect(()=>{
       setCount(lot.count)
     },[])
     const validate=async()=>{
       try{
      await schema.validate({count}, { abortEarly: false })
      return true;
       }
       catch(er:any){
         console.log(er.errors)
         setErrors(er.errors)
         return false;
       }
     
     
     }
    const changeInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
       const id=parseInt(e.target.value)
       setCount(id)
     }
   const  handleSubmit=async(e:React.MouseEvent<HTMLButtonElement>)=>{

     e.preventDefault();
     const isValid:boolean=await validate();
     if(isValid==true){
      dispatch(AddLotToBasket({...lot,count:count}))
      navigate("/")
      setErrors([])
     }
     {

     }
     console.log("add")

       
     }
  return (
    <div className="col-md-3 lot">
      <ul>
      { 
 errors.map((el:string,i:number)=>{
  return(<>
  <li key={i}>
   {el}
  </li>
  </>)
 }
 )}
 
      </ul>
          <div className="row img-container">
          <img  className='lot-img' src={lot.image}/>
          </div>
          
          <div className="row">
          <span className='lot-name'>
          {lot.title}
          </span>
          
          <div className="lot-description">
        {lot.description}
          </div>
          <form>
          <input type="number" value={count} onChange={changeInput} min={1} />
          <button onClick={handleSubmit} type="submit" className='btn btn-primary btn-regist-shop'>
            افزودن یه سبد خرید
              </button>
          </form>
          </div>
        </div>
  )
}
export  default Lot;
