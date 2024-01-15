import React from 'react'

const FlashCards = ({classes, text,price}) => {
  return (
    <div className={` ${classes} w-1/3  h-fit py-2 px-3   rounded-md` }>
      <h3>{text}: {price}Dh</h3>
    </div>
  )
}

export default FlashCards