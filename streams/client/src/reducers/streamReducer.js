import _ from 'lodash'
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      // We're using lodash's mapKeys to transform the array of stream objects that we get in the response from the api into an object of { [id]: streamObject, ... }
      return { ...state, ..._.mapKeys(action.payload, 'id') }

    case FETCH_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload }

    case DELETE_STREAM:
      // return { ...state, [action.payload]: undefined }
      return _.omit(state, action.payload)

    default:
      return state
  }
}
