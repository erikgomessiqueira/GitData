export function ToggleStateModal(toggleStateModal){
    return {
        type: 'TOGGLE_STATE_MODAL',
        payload:{
            handleStateModal:!toggleStateModal
        }
    }
}

export function HandleLoading(loading){
    return {
        type: 'LOADING',
        payload:{
            handleStateModalLoading:loading
        }
    }
}

export function ShowErrorRequest(alertErrorState){
    return {
        type: 'SHOW_ERROR_REQUEST',
        payload:{
            alert: alertErrorState
        }
    }
}

export function requestLoad(login){
    return {
        type: 'REQUEST_LOAD',
        payload:{login}
    }
}

export function requestSucess(data){
    return {
        type: 'REQUEST_SUCESS',
        payload: {data}
    }
}

export function resquestFailed(data){
    return {
        type: 'REQUEST_FAILED',
        payload: {
            requestSucess: data
        }
    }
}