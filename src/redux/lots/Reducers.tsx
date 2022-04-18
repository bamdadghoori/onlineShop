import console from "console";
import { GET_LOTS_SUCCESS,GET_LOTS_FAIL,ADD_LOT_TO_LIST,Delete_LOT_FROM_BASKET,ADD_COUNT_OF_LOT,DECREMENT_COUNT_OF_LOT, ADD_LOT_TO_BASKET } from "./Types";
const initialState={
    lots:[
        {
            id:0,
                name:"firstLot" ,
                count:1,
                description:"",
                imgUrl:"https://picsum.photos/200"
        },

    ] ,
    costumerLots:[{
        id:0,
        name:"" ,
        count:0,
        description:"",
        imgUrl:""
    },],
    errors:"",
    totalCount:0
}
export const Reducer=(state=initialState,action:{type:string,payload:{lot?:object,id?:number,cLot?:any,lots?:Array<any>,er:string}})=>{
    switch (action.type) {
        case GET_LOTS_SUCCESS:
            return{...state,lots:action.payload.lots}
            break;
            case GET_LOTS_FAIL:
                return{...state,errors:action.payload.er}
                break;
        case ADD_LOT_TO_LIST:
           
            return{...state,lots:[...state.lots,action.payload.lot]}
            break;
            
           
            
            case Delete_LOT_FROM_BASKET:
            return {...state,lots:state.lots.filter((el)=>{return action.payload.id!==el.id})}
                break;
                case ADD_COUNT_OF_LOT:
                    return{...state,lots:[...state.lots,state.lots.map((el)=>{el.count++})]}
                    break;
                    case  ADD_LOT_TO_BASKET:
                        return{...state,costumerLots:[...state.costumerLots,action.payload.cLot],totalCount:state.totalCount+action.payload.cLot.count}
                    break;
                    case DECREMENT_COUNT_OF_LOT:
                        return{...state,lots:[...state.lots,state.lots.map((el)=>{el.count--})]}
                        break;
        default:
            return initialState;
            break;
    }
}