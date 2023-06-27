const currentUserReducer=(state = null,action)=>{
    switch(action.type){
        case 'FETCH_CURRENT_USER0':
            return action.payload;
            default:
                return state;
    }
}

export default currentUserReducer;