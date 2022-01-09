const INITIAL_STATE = {    
        loading: false,
        toggleStateModal: false,
}

export const aplication = (state = INITIAL_STATE, action) =>{
        if (action.type ==='TOGGLE_STATE_MODAL'){
            return {
                ...state,
                toggleStateModal: action.payload.handleStateModal
            }
        }
        else if (action.type ==='LOADING'){
            //console.log(action.payload.handleStateModal)
            return {
                ...state,
                toggleStateModal: action.payload.handleStateModal
            }
        }
        else{
            return state
        }

}