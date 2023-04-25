import React from 'react'
import './Display.css'


const Display = ({logs, calculatedValue}) => {
  return (
    <div className="resultArea">
         <div className="resultAreaCalulated">{logs || "0"}</div>
         <div className="resultAreaResult">{calculatedValue || 0}</div>
	</div>
  )
}

export default Display;