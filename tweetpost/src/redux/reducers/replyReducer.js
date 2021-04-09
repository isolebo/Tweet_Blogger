import {
    LIST_ALL_REPLIES, LIST_ALL_REPLIES_FAILED,
    GET_REPLY_DETAILS, GET_REPLY_DETAILS_FAILURE,
    
} from '../actions/types/reply';

//Create the initial/default state for the REPLYReducer
const initialState = {
    replyList: [],errorMessage_reply:{},
    replyDetails: {},errorMessage_details: {}
    
}

const replyReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case LIST_ALL_REPLIES:
            return {
                ...state,
                replyList: action.payload
            };
        case LIST_ALL_REPLIES_FAILED:
            return {
                ...state,
                errorMessage_reply: action.payload
            };
        case GET_REPLY_DETAILS:
            return {
                ...state,
                replyDetails: action.payload
            };
        case GET_REPLY_DETAILS_FAILURE:
            return {
                ...state,
                errorMessage_details: action.payload
            };
        
        
        default:
            return state;
        
    }
}
export default replyReducer;