import React from 'react'

const Number = () => {
    const arr = Array(32).fill();

    
    const isPrime =(number) => {
      for(let i = 2; i < number; i++){
        if (number % i === 0) return false;
      }
      return number > 1; 
    }

    const evenNum =  arr.map((number, i) => (
        <span key={i} style={ isPrime(i) ? {background: 'yellow'} :
        ( i % 2 === 0 ? {background: 'red'} : {background: 'green'})}>
           {i} 
        </span>   
    ))

  return (
    <div className='number'>
        {evenNum}
    </div>
  )
}

export default Number
