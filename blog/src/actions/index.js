import jsonPlaceHolder from '../apis/jsonPlaceHolder';

// Define a function returning a dispatch function
export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');

        dispatch( { type: 'FETCH_POSTS', payload: response.data })
    
};

// redux thunk returns pure objects or function
// call dispatch function and pass action Objects
// add async function. Async function used to return requested objects instead of action object.
// With Redux thunk, it modifies to action objects.