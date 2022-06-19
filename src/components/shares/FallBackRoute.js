import React from 'react'
import { Link } from 'react-router-dom'

const FallBackRoute = () => {
  return (
    <div className='conatiner'>
        <div className='row'>
            <div className='col'>
            <h3 className='text-center'>No Route Found</h3>
        <h4 className='text-center my-5'><Link to='/'>Go Back Home</Link></h4>
            </div>
        </div>
       
    </div>
  )
}

export default FallBackRoute