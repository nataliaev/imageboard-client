import request from 'superagent'

export const ALL_IMAGES = 'ALL_IMAGES'

const baseUrl = 'http://localhost:4000'

//'https://safe-sea-63608.herokuapp.com' || 

function allImages (payload) {
  return {
    type: ALL_IMAGES,
    payload
  }
}

export const getImages = () => (dispatch, getState) => {
  const state = getState()
  const { images } = state

  if (!images.length) {
    request(`${baseUrl}/image`)
      .then(response => {
        const action = allImages(response.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}

export const NEW_IMAGE = 'NEW_IMAGE'

function newImage (payload) {
  return {
    type: NEW_IMAGE,
    payload
  }
}

export const createImage = data => (dispatch, getState) => {

  const state = getState()
  const { user } = state

  request
    .post(`${baseUrl}/image`)
    .set('Authorization', `Bearer ${user}`)
    .send(data)
    .then(response => {
      const action = newImage(response.body)

      dispatch(action)
    })
    .catch(console.error)
}

export const JWT = "JWT"

function newLogin (payload) {
  return {
    type: JWT,
    payload
  }
}

export const SET_FAVORITES = "SET_FAVORITES"

function setFavorites (payload) {
  return {
    type: SET_FAVORITES,
    payload
  }
}

export const login = (email, password) => dispatch => {
  const payload = {email, password}
  request
    .post(`${baseUrl}/logins`)
    .send(payload)
    .then(response => {
      const action = newLogin(response.body.jwt)
      dispatch(action)
      const actionFavorites = setFavorites(response.body.favorites)
      dispatch(actionFavorites)
    })
    .catch(console.error)
}

export const ADD_LIKE = 'ADD_LIKE'

function addLike (id, payload) {
  return {
    type: ADD_LIKE,
    id,
    payload
  }
}

export const ADD_FAVORITE = 'ADD_FAVORITE'

function addFavorite (payload) {
  return {
    type: ADD_FAVORITE,
    payload
  }
}

export const likes = (id) => (dispatch, getState) => {
  const state = getState()
  const { user } = state

  request
    .post(`${baseUrl}/like`)
    .set('Authorization', `Bearer ${user}`)
    .send({
      like : 1,
      imageId : id,
      user
      })
    .then(() => {
      const action = addLike(id, "new_like")
      dispatch(action)
      const actionFavorites = addFavorite(id)
      dispatch(actionFavorites)
    }
  )
}