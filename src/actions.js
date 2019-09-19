import request from "superagent";

const baseUrl =  "http://localhost:4000";

// 'https://safe-sea-63608.herokuapp.com' ||

export const ALL_IMAGES = "ALL_IMAGES";

function allImages(payload) {
  return {
    type: ALL_IMAGES,
    payload
  };
}

export const getImages = () => (dispatch, getState) => {
  const state = getState();
  const { images } = state;

  if (!images.length) {
    request(`${baseUrl}/image`)
      .then(response => {
        const action = allImages(response.body);

        dispatch(action);
      })
      .catch(console.error);
  }
};

export const NEW_IMAGE = "NEW_IMAGE";

function newImage(image) {
  const {id, url, title, createdAt, updatedAt} = image
  return {
    type: NEW_IMAGE,
    payload: {id, url, title, createdAt, updatedAt, users : []}
  };
}

export const createImage = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;

  request
    .post(`${baseUrl}/image`)
    .set("Authorization", `Bearer ${user}`)
    .send(data)
    .then(response => {
      const action = newImage(response.body);

      dispatch(action);
    })
    .catch(console.error);
};

export const JWT = "JWT";

function newLogin(payload) {
  return {
    type: JWT,
    payload
  };
}

export const SET_FAVORITES = "SET_FAVORITES";

function setFavorites(payload) {
  return {
    type: SET_FAVORITES,
    payload
  };
}

export const login = (email, password) => dispatch => {
  const payload = { email, password };
  request
    .post(`${baseUrl}/logins`)
    .send(payload)
    .then(response => {
      const action = newLogin(response.body.jwt);
      dispatch(action);
      const actionFavorites = setFavorites(response.body.favorites);
      dispatch(actionFavorites);
    })
    .catch(console.error);
};

//likes
export const ADD_LIKE = "ADD_LIKE";

function addLike(id, payload) {
  return {
    type: ADD_LIKE,
    id,
    payload
  };
}

export const ADD_FAVORITE = "ADD_FAVORITE";

function addFavorite(newFavoriteImage) {
  return {
    type: ADD_FAVORITE,
    payload: newFavoriteImage
  };
}

export const likes = (id, newFavoriteImage) => (dispatch, getState) => {
  const state = getState();
  const { user } = state;

  request
    .post(`${baseUrl}/like`)
    .set("Authorization", `Bearer ${user}`)
    .send({
      like: 1,
      imageId: id,
      user
    })
    .then(() => {
      const action = addLike(id, "new_like");
      dispatch(action);
      const actionFavorites = addFavorite(newFavoriteImage);
      dispatch(actionFavorites);
    })
    .catch(console.error);
};

//dislikes
export const DELETE_LIKE = "DELETE_LIKE";

function deleteLike(id) {
  return {
    type: DELETE_LIKE,
    payload: parseInt(id)
  };
}

export const DELETE_FAVORITE = 'DELETE_FAVORITE'

function deleteFavorite (id) {
  return {
    type: DELETE_FAVORITE,
    payload: parseInt(id)
  }
}

export const dislikes = id => (dispatch, getState) => {
  const state = getState();
  const { user } = state;

  request
    .delete(`${baseUrl}/like/${id}`)
    .set("Authorization", `Bearer ${user}`)
    .then(() => {
      const action = deleteLike(id);
      dispatch(action);
      const actionFavorites = deleteFavorite(id)
      dispatch(actionFavorites)
    })
    .catch(console.error);
};
