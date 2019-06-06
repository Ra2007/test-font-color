import React from 'react'
import { Helmet } from 'react-helmet'

const FontLinks = ({ fonts }) => (
  <Helmet>
    {fonts.map((item) => (
      <link
        href={`https://fonts.googleapis.com/css?family=${item}&display=swap`}
        rel="stylesheet"
        key={item}
      />
    ))}
  </Helmet>
)

export default FontLinks
