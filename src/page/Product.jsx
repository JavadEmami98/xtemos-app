import { Container } from '@mui/material'
import React from 'react'
import IndexHeader from '../component/layout/header/IndexHeader'
import ProductDetail from '../component/ProductDetail/ProductDetail'

function Product() {
  return (
    <div>
         <Container maxWidth="lg">
        <IndexHeader/>
        <ProductDetail/>
        </Container>
    </div>
  )
}

export default Product