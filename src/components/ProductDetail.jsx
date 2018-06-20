import React, { Component } from 'react';
import StateDecrementButton from '../containers/StateDecrementButton';
import StateIncrementButton from '../containers/StateIncrementButton';

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <div style={{ background: '#49DD8E', padding: '1em .5em' }}>
          <h1 style={{ textAlign: 'center' }}>
            Detail of {this.props.productDetail.name}
          </h1>
          <div
            style={{
              background: 'white',
              padding: '0.5em 1em',
              margin: '0.5em 1em',
              display: 'flex',
              alignItems: 'flex-start'
            }}
          >
            <img
              src={this.props.productDetail.image}
              alt={this.props.productDetail.name}
              style={{ maxWidth: '10em', marginRight: '1em' }}
            />
            <div style={{ flex: '1' }}>
              <h3 style={{ margin: '0' }}>
                Product name: {this.props.productDetail.name}
              </h3>
              <h3 style={{ margin: '0' }}>
                Price/ud: {this.props.productDetail.price}€
              </h3>
              <h3 style={{ margin: '0' }}>
                Quantity in cart:{' '}
                {this.props.productDetailCart !== undefined
                  ? this.props.productDetailCart.quantity
                  : 0}
              </h3>
              <h3 style={{ margin: '0' }}>
                Accumulated price:{' '}
                {this.props.productDetailCart !== undefined
                  ? this.props.productDetailCart.accumulatedPrice
                  : 0}
              </h3>

              <StateIncrementButton
                product={this.props.productDetail}
                children="Add"
              />
              {this.props.productDetailCart !== undefined ? (
                <StateDecrementButton
                  product={this.props.productDetailCart}
                  children="Decrease"
                />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
