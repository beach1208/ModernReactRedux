import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPostsAndUsers = () => async (dispatch,getState) => {
        await dispatch(fetchPosts());
        const userIds = _.uniq(_.map(getState().posts, 'userId'));
        userIds.forEach(id => dispatch(fetchUser(id)));
};

// Define a function returning a dispatch function
export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');

        dispatch( { type: 'FETCH_POSTS', payload: response.data })
    
};

// redux thunk returns pure objects or function
// call dispatch function and pass action Objects
// add async function. Async function used to return requested objects instead of action object.
// With Redux thunk, it modifies to action objects.

export const fetchUser = id => async dispatch => {
        const response = await jsonPlaceHolder.get(`/users/${id}`);
        dispatch({ type: 'FETCH_USER', payload: response.data});
};

