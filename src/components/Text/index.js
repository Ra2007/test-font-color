import React from 'react'

const Text = ({ font }) => {
  return (
    <div>
      <span style={{ fontFamily: font }}>
        выбранный в списке шрифт должен применяться к этому тексту
      </span>
      <br />
      <br />
      <span style={{ fontFamily: font }}>Yor Fonts second paragraph</span>
    </div>
  )
}

export default Text
