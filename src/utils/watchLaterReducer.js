export const initialWatchLater=JSON.parse(localStorage?.getItem("watchLater"))??[];
export const watchLaterReducer=(state,action)=>{
    const {type,payload}=action;
    switch(type){
        case "ADD":
            const {_id:receivedId}=payload;
            const alreadyInWatchLater=state?.findIndex(({_id})=>_id===receivedId)!==-1;
            return alreadyInWatchLater?state:[...state,payload];
        case "REMOVE":
            return state?.filter(({_id})=>_id!==payload);
        default:return state;
    }
}