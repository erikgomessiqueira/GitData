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
            handleStateModal:!loading
        }
    }
}

export function requestLoad(login){
    console.log('aq')
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

export function resquestFailed(){
    return {
        type: 'REQUEST_FAILED',
    }
}