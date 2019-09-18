import { combineReducers } from 'redux'
import images from './images'
import user from './user'
import favorites from './favorites'

export default combineReducers({
  images, user, favorites
})