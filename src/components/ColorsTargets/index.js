import React from 'react'
import './styles.css'

const ColorsTargets = ({ active, changeActive, colors }) => (
  <div className="targets">
    {colors.map((item, index) => (
      <div
        className={`target ${index === active && 'active'}`}
        style={{ backgroundColor: item }}
        key={index}
        onClick={() => changeActive(index)}
      />
    ))}
  </div>
)

export default ColorsTargets
