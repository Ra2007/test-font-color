import * as types from '../constants'

const initialState = {
  fontName: '',
  listFont: ['Roboto', 'Nunito'],
  selectedFont: 'Roboto',
  errorNoFont: false,
  errorNameFont: false
}

const font = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_FONT_INPUT:
      return {
        ...state,
        fontName: action.payload
      }

    case types.ADD_NEW_FONT:
      return {
        ...state,
        listFont: [...state.listFont, state.fontName],
        fontName: '',
        errorNoFont: false,
        errorNameFont: false
      }

    case types.ERROR_NO_FONT:
      return {
        ...state,
        errorNoFont: true,
        errorNameFont: false
      }
    case types.ERROR_NAME_FONT:
      return {
        ...state,
        errorNameFont: true,
        errorNoFont: false
      }
    case types.SELECT_FONT:
      return {
        ...state,
        selectedFont: action.payload
      }
    default:
      return state
  }
}

export default font
