import * as types from '../constants'

const changeActiveTargetColor = (index) => {
  return {
    type: types.CHANGE_ACTIVE_TARGET_COLOR,
    payload: index
  }
}

const changeColorPicker = ({ target: { value } }) => {
  return {
    type: types.CHANGE_COLOR_PICKER,
    payload: value
  }
}

export { changeActiveTargetColor, changeColorPicker }
