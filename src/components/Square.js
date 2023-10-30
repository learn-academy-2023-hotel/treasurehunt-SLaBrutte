import React from "react"

const Square = ({value, index }) => {   //if you have more than 1 prop use ({value, index}) instead of (props)
    // const { value } = props  // destructuring props


  return (
    <>
      <div className="square">{value}</div>
    </>
  )
}
export default Square
