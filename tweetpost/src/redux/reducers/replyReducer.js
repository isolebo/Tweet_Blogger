import {
    LIST_ALL_REPLIES, LIST_ALL_REPLIES_FAILED,
    LIST_REPLY_DETAILS, LIST_REPLY_DETAILS_FAILURE,
    
} from '../actions/types/reply';

//Create the initial/default state for the REPLYReducer
const initialState = {
    replyList: [],errorMessage_reply:{},
    replyDetails: {},errorMessage_det: {}
    
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
        case LIST_REPLY_DETAILS:
            return {
                ...state,
                replyDetails: action.payload
            };
        case LIST_REPLY_DETAILS_FAILURE:
            return {
                ...state,
                errorMessage_det: action.payload
            };
        
        
        default:
            return state;
        
    }
}
export default replyReducer;