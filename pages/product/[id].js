import { useRouter } from 'next/router'
import React from 'react'

function ProductItem() {
    const route = useRouter();

  return (
    <div>ProductItem {route.query.id}</div>
  )
}

export default ProductItem