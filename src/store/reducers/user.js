const INITIAL_STATE = {
        name:'',
        requestSucess: {
            state: false,
            error:'',
            alert: 'storage',
        },
        login:'',
        bio:'',
        avatar_url:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        repos:[]
}

export const user = (state = INITIAL_STATE, action) =>{
        console.log(action.type)
        if (action.type ==='REQUEST_SUCESS'){
            const data = action.payload.data
            //console.log(data)
            return data
        }
        else if (action.type ==='LOADING'){
            //console.log(action.payload.handleStateModalLoading)
            return {
                ...state,
                toggleStateModal: action.payload.handleStateModalLoading
            }
        }
        if (action.type ==='SHOW_ERROR_REQUEST'){
            console.log(action.payload.alert)
            return {
                ...state,
                requestSucess:{
                    state: state.requestSucess.state,
                    error: state.requestSucess.error,
                    alert: action.payload.alert,
                },
            }
        }
        if (action.type ==='REQUEST_FAILED'){
            console.log(action.payload.requestSucess)
            return {
                ...state,
                requestSucess: action.payload.requestSucess
            }
        }
        else{
            return state
        }

}