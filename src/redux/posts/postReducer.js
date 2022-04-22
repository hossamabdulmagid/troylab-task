import {PostsType} from './poststype.js'

const INITIAL_STATE = {

    loading: false,
    error: null,
    posts: []
};

const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PostsType.GET_POST_START:
            return {
                ...state,
                loading: true,
            }


        case PostsType.GET_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
            }
        case PostsType.GET_POST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default postsReducer;