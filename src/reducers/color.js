import * as types from '../constants'

const initialState = {
  activeTarget: 0,
  colors: ['#d0cfcf', '#d0cfcf', '#d0cfcf', '#d0cfcf', '#d0cfcf'],
  selectedColor: '#53e163'
}

const color = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_ACTIVE_TARGET_COLOR:
      return {
        ...state,
        activeTarget: action.payload
      }
    case types.CHANGE_COLOR_PICKER:
      return {
        ...state,
        selectedColor: action.payload,
        colors: state.colors.map((item, index) =>
          index === state.activeTarget ? action.payload : item
        )
      }
    default:
      return state
  }
}

export default color
