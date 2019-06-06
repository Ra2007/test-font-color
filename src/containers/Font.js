import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeFontInput, addFont, selectFont } from '../actions'
import { Text, FontLinks, Errors } from '../components'

class Font extends Component {
  render () {
    const {
      font: { fontName, listFont, selectedFont, errorNoFont, errorNameFont },
      changeFontInput,
      addFont,
      selectFont
    } = this.props
    return (
      <div>
        <FontLinks fonts={listFont} />
        <div className="font">
          <h1>часть 1</h1>
          <div className="controls">
            <div>
              <span>
                шрифты с
                <a href="https://fonts.google.com/" target="_blank">
                  https://fonts.google.com/
                </a>
                (например Roboto, Oswald и т.п.)
              </span>
              <div>
                <input
                  type="text"
                  value={fontName}
                  onChange={changeFontInput}
                />
                <button onClick={addFont}>добавить</button>
              </div>
              <Errors errorNameFont={errorNameFont} errorNoFont={errorNoFont} />
              <div>
                <span>список шрифтов</span>
                <select value={selectedFont} onChange={selectFont}>
                  {listFont.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <Text font={selectedFont} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ font }) => {
  return { font }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      changeFontInput,
      addFont,
      selectFont
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Font)
