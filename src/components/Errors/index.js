import React from 'react'
import './styles.css'

const Errors = ({ errorNoFont, errorNameFont }) => (
  <div className="font-error">
    {errorNoFont && 'Нет такого шрифта в Google Fonts'}
    {errorNameFont && 'Такой шрифт уже добавлен'}
  </div>
)

export default Errors
