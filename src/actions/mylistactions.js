import * as Movies from "../components/Carousel/api/Movies";

export const types = {
  GET_MY_LIST_COTENT: "GET_MY_LIST_COTENT",
  GET_MY_LIST_CONTENT_SUCCESS: "GET_MY_LIST_CONTENT_SUCCESS",
  GET_MY_LIST_CONTENT_LOADING: "GET_MY_LIST_CONTENT_LOADING",
  GET_MY_LIST_CONTENT_FAULURE: "GET_MY_LIST_CONTENT_FAULURE",
};

export const MyListActions = {
  MyListReq,
};

function MyListReq(query) {
  return (dispatch) => {
    Movies.search(query)
      .then((res) => {
        dispatch({ type: types.GET_MY_LIST_CONTENT_LOADING });
        dispatch(success({ records: res, movieSearched: true }));
      })
      .catch((err) =>
        dispatch(failure({ type: types.GET_MY_LIST_CONTENT_FAULURE, err }))
      );
  };

  function request(res = []) {
    return { type: types.GET_MY_LIST_COTENT, res };
  }
  function success(records = []) {
    return { type: types.GET_MY_LIST_CONTENT_SUCCESS, records };
  }
  function failure(error) {
    return { type: types.GET_MY_LIST_CONTENT_FAULURE, error };
  }
}
