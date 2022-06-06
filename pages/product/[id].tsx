import React from 'react'
import { useRouter } from '../../node_modules/next/router';



const ProductItem = () => {
    const route = useRouter();

  return (
    <div>ProductItem {route.query.id}</div>
  )
}

export default ProductItem