import React from 'react'
import Online from '../component/Online/Online'
import QA from '../component/Q&A/Q&A'

function Payment() {
  return (
    <div>
        <div className='bg-[#f0f5ff]'> 
           <Online/> 
        </div>
        
        <QA/>
    </div>
  )
}

export default Payment