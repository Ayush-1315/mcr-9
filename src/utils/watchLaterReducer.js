export const initialWatchLater=[];
export const watchLaterReducer=(state,action)=>{
    const {type,payload}=action;
    switch(type){
        case "ADD_TO_WATCH_LATER":
            const {_id:receivedId}=payload;
            const alreadyInWatchLater=state?.findIndex(({_id})=>_id===receivedId)!==-1;
            console.log(alreadyInWatchLater);
            return alreadyInWatchLater?state:[...state,payload];
        default:return state;
    }
}