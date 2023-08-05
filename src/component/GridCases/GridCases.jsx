import React from 'react'
import GridCasesCart from '../Cart/GridCasesCart'

function GridCases() {
  return (
    <div className='grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
        <GridCasesCart/>
        <GridCasesCart/>
        <GridCasesCart/>
        <GridCasesCart/>
        <GridCasesCart/>
        <GridCasesCart/>
        <GridCasesCart/>
        <GridCasesCart/>
        <GridCasesCart/>
        <GridCasesCart/>
        <GridCasesCart/>
    </div>
  )
}

export default GridCases