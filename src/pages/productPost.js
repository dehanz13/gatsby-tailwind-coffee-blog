import React from "react"

import ProductRoll from "../components/Post/ProductRoll"

class ProductPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Latest Posts</h1>
        <section>
          <div className="content">
            <ProductRoll />
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default ProductPage
