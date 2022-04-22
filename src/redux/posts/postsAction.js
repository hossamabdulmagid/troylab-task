import {PostsType} from './poststype';
import axios from 'axios';

const PostStart = () => ({
    type: PostsType.GET_POST_START,
})


const PostSuccess = (data) => ({
    type: PostsType.GET_POST_SUCCESS,
    payload: data
})

const PostError = (error) => ({
    type: PostsType.GET_POST_ERROR,
    payload: error,
})


export const doGetPosts = () => {
    return dispatch => {
        dispatch(PostStart())
        axios.get(`https://fakestoreapi.com/products`)
            .then((res) => {
                console.log(res.data)
                if (res.status === 200) {
                    dispatch(PostSuccess(res.data))
                }
                //
            })
            .catch(error => {
                console.log(error)
                dispatch(PostError(error))
            })
    }
}