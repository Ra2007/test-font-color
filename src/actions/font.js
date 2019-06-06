import * as types from '../constants'

const changeFontInput = ({ target: { value } }) => {
  return {
    type: types.CHANGE_FONT_INPUT,
    payload: value
  }
}

const addFont = () => {
  return (dispatch, getState) => {
    const { listFont, fontName } = getState().font

    if (listFont.indexOf(fontName) === -1) {
      let newFontName = fontName
        .split('')
        .map((item) => (item === ' ' ? '+' : item))
        .join('')
      fetch(
        `https://fonts.googleapis.com/css?family=${newFontName}&display=swap`
      )
        .then(() =>
          dispatch({
            type: types.ADD_NEW_FONT
          })
        )
        .catch(() =>
          dispatch({
            type: types.ERROR_NO_FONT
          })
        )
    } else {
      dispatch({
        type: types.ERROR_NAME_FONT
      })
    }
  }
}

const selectFont = ({ target: { value } }) => {
  return {
    type: types.SELECT_FONT,
    payload: value
  }
}

export { changeFontInput, addFont, selectFont }
