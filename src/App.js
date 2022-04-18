import logo from './logo.svg';
import './App.css';
// import Types from './redux/lots/Types.tsx';
import Home from './components/home.tsx';
import {Route,Routes} from 'react-router-dom'
import LotDetails from "./components/lotDetails"
// sometimes need to install deno and use the code below
//@ts-ignore
import Navbar from './components/navbar.tsx'
import {useDispatch,useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {GetLotsSuccess,GetLotsFail} from './redux/lots/Actions.tsx'
function App() {
  const [lots,setLots]=useState([])
  const state=useSelector(state=>state.lots)
  const stateCount=useSelector(state=>state.totalCount)
  const [totalCount,setTotalCount]=useState()
  console.log(state)
  
  const dispatch=useDispatch()
  //cLot=costumerLot
  const [cLot,setCLot]=useState()
  const getLots=()=>{
    
    return async function(dispatch){
      console.log("g")
      try{
        const response=await axios.get("https://fakestoreapi.com/products")
        dispatch(GetLotsSuccess(response.data))
        console.log(response.data)
      }
      catch(er){
        dispatch(GetLotsFail(er))
        console.log(er)
      }
     
    }
  }
  useEffect(()=>{
   dispatch(getLots());
  },[state])
  return (<>
  {console.log(state)}
  {/* {console.log(stateCount)} */}
  <Navbar totalCount={stateCount}/>
    <Routes>
      <Route element={<Home Lots={state}/>}  path="/">
      <Route element={<LotDetails/>} path="/lotdetails"/>
     </Route>
     
    </Routes>
    <div className="App">
 
  {/* <Home/> */}
  {/* <Types/> */}
    </div>
   
    </>
  );
}

export default App;