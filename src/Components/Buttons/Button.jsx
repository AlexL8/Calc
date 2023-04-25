import React from 'react'
import classNames from 'classnames';
import './Button.css'


const Button = ({orange, title, onClick}) => {
  return (
	<button
	className='btn'
        //  className={classNames({
        //     "btn": true,
        //     "btnOrange": orange,
        //  })}
         onClick={onClick}
      >
         {title}
      </button>
  )
}

export default Button;
