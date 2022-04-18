import { GET_LOTS_SUCCESS,GET_LOTS_FAIL,ADD_LOT_TO_LIST,Delete_LOT_FROM_BASKET,ADD_COUNT_OF_LOT,DECREMENT_COUNT_OF_LOT,ADD_LOT_TO_BASKET } from "./Types";
export const GetLotsSuccess=(lots:Array<any>)=>{
   
    return {
        type: GET_LOTS_SUCCESS,
       payload:{lots:lots}
        
    }
}
export const GetLotsFail=(er:string)=>{
   
    return {
        type: GET_LOTS_FAIL,
       payload:{er:er}
        
    }
}
export const AddLotToList=(lot:object)=>{
    console.log("a")
    return {
        type:ADD_LOT_TO_LIST,
        payload:{
            lot:lot
        }
        
    }
}
const DeleteLotFromBasket=(id:number)=>{
    return {
        type:Delete_LOT_FROM_BASKET,
        payload:{id:id}
    }
}
const AddCountOfLot=(id:number)=>{
    return {
        type:ADD_COUNT_OF_LOT,
        payload:{id:id}
    }
}
const DecrementCountOfLot=(id:number)=>{
    return{
        type:DECREMENT_COUNT_OF_LOT,
        payload:{id:id}
    }
}
export const AddLotToBasket=(cLot:object)=>{
    return {
        type:ADD_LOT_TO_BASKET,
        payload:{cLot:cLot}
    }
}
