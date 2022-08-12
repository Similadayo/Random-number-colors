import React from 'react'

const RandomColors = () => {
    const arry = Array(32).fill()
    const Random = (num) => {
        return Math.floor(Math.random() * num)
    }

    const ColoRandon = () => {
        return "#" + Random(999999) + ""
    }

    const Randomize = arry.map((items, i)=>(
        <span key={i} style={{background: ColoRandon()}}>
            {ColoRandon()}
        </span> 
     ))


  return (
    <div className='random'>
        {Randomize}
    </div>
  )
}

export default RandomColors