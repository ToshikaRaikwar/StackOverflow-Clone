const useReducer=(states=[],action)=>{
    switch(action.type){
        case 'FETCH-USERS':
            return action.payload;
        case 'UPDATE_CURRENT_USER':
            return states.map((state)=>state._id===action.payload._id ? action.payload : state)
        default:
            return states;
    }
}
export default useReducer;