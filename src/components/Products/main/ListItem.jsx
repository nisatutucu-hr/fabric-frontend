import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Item({ product }) {
  let navigate = useNavigate()
  let getProductPage = (productId) => {
    navigate(`/products/product-detail/${productId}`)
  }

  return (
    <>
      <div className="product col-3">
        <div className="card" onClick={() => getProductPage(product.id)}>
          <img src={product.image} alt={product.title}></img>
          <div className="card-body">
            <div className="title">{product.title}</div>
            <div className="price">€ {product.price}</div>
          </div>
        </div>
      </div>
    </>
  )
}
