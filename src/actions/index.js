import JsonPlaceholder from "../apis/JsonPlaceholder"
import _ from 'lodash'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(user(id)))
    .value()
}


export const fetchPosts = () => async dispatch =>  {
        const {data} = await JsonPlaceholder.get('/posts')
        dispatch({type: 'FETCH_POSTS', payload: data })
    };
export const user = id =>  async dispatch => {
    const response = await JsonPlaceholder.get(`/users/${id}`)
    dispatch({type: 'FETCH_USERNAME', payload: response.data })
}

// export const user = (id) => (dispatch) => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await JsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USERNAME", payload: response.data });
// });