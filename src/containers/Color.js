import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeActiveTargetColor, changeColorPicker } from '../actions'
import { ColorsTargets } from '../components'

class Color extends Component {
  render () {
    const {
      color: { activeTarget, colors, selectedColor },
      changeActiveTargetColor,
      changeColorPicker
    } = this.props
    return (
      <div>
        <div className="color">
          <h1>часть 2</h1>
          <p>
            здесь должен быть колорпикер и группа объектов, при изменении цвета
            в колорпикере выбранный цвет должен устанавливаться в качестве фона
            для выбранного объекта из группы, активный объект выбирается кликом
            по одному из группы
          </p>
          <input
            type="color"
            name="favcolor"
            value={selectedColor}
            onChange={changeColorPicker}
          />
          <ColorsTargets
            active={activeTarget}
            // color={selectedColor}
            changeActive={changeActiveTargetColor}
            colors={colors}
          />
        </div>
        <hr />
        <div className="info">
          <ul>
            <li>
              чем короче, быстрее/производительнее и понятнее код тем лучше
            </li>
            <li>чем меньше стороннего кода (библиотек) тем лучше</li>
            <li>использование react(+redux) желательно но не обязательно</li>
            <li>можно использовать jQuery</li>
            <li>весь html страницы можно редактировать как угодно</li>
            <li>
              при желании можно использовать webpack, git и т.п., если на это
              есть время (но не нужно слишком всё усложнять)
            </li>
            <li>если не успеете закончить присылайте что успели</li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ color }) => {
  return { color }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      changeActiveTargetColor,
      changeColorPicker
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Color)
