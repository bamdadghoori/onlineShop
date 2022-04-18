import React from 'react'
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {AddLotToList} from "../redux/lots/Actions"
const LotDetails = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
 const [lot, setLot] = useState(
  {
    id:0,
                name:"" ,
                count:1,
                description:"",
                imgUrl:""
  }
 )
  
  
  const changeInput=(e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)=>{
            setLot({...lot,[e.target.name]:e.target.value})
  }
  const changeImage=(e:React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files){
      setLot({...lot,imgUrl:URL.createObjectURL(e.target.files[0])})
     
  }
 
  }
  const handleSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
    console.log(lot);
    e.preventDefault();
    dispatch(AddLotToList(lot))
   navigate("/")
}
  return (
   <>
   <div className="wrapper fadeInDown">
  <div id="formContent">
    

    
    <div className="fadeIn first">
      Lot Details
      <i className='fa fa-window-close' onClick={()=>{navigate("/")}}/>
    </div>

   
    <form onSubmit={handleSubmit}>
      <input type="text" id="LotName" className="fadeIn second" name="name" placeholder="LotName" value={lot.name} onChange={changeInput}/>
      <input type="number" min={1} id="count" className="fadeIn third" name="count"  placeholder="Count" value={lot.count} onChange={changeInput} />
      <textarea id="description" className="fadeIn third" name="description" placeholder="Description" value={lot.description} onChange={changeInput}/>
      <input type="file" className="fadeIn third"  name="imgUrl" id="imgUrl"  onChange={changeImage}/>
      <img className='lot-img-preview' src={lot.imgUrl} />
      <input type="submit" className="fadeIn fourth" value="Insert"/>
      
    </form>

   
    

  </div>
</div>
   </>
  )
}
export default LotDetails;
