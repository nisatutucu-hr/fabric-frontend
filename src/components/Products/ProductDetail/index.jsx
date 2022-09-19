import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api.json'
import './style.css'

function ProductDetail() {
  const [product, setProduct] = useState(null)
  let params = useParams()

  useEffect(() => {
    let { productId } = params
    let selectedProduct = api.find((u) => u.id == productId)
    setProduct(selectedProduct)
  }, [params])

  return (
    <>
      {!product && 'Loading'}
      {product && (
        <div className="productDetail">
          <div className="d-flex p-2">
            <div className="left">
              <img src={product.image} alt={product.title}></img>
            </div>
            <div className="right">
              <h1 className="title display-2">{product.title}</h1>
              <div className="price">€ {product.price}</div>
              <div className="shortDescription">{product.shortDescription}</div>
            </div>
          </div>
          <div className="body">{product.longDescription}</div>
        </div>
      )}
    </>
  )
}

export default ProductDetail
