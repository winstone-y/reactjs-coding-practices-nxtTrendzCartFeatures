import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      console.log(cartList.length)
      const showEmptyView = cartList.length === 0
      let totalPrice = 0

      if (showEmptyView !== true) {
        cartList.every(item => {
          totalPrice += item.price * item.quantity
          return totalPrice
        })
      }

      // TODO: Update the functionality to remove all the items in the cart
      const onRemoveAllCartItems = () => {
        removeAllCartItems()
      }
      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  onClick={onRemoveAllCartItems}
                  className="cart-remove"
                >
                  Remove All
                </button>
                <CartListView />
                {/* TODO: Add your code for Cart Summary here */}
                <div className="summary">
                  <h1 className="price">Order Total: {totalPrice}</h1>
                  <p className="cart-items">{cartList.length} Items in cart</p>
                  <button type="button" className="checkout-button">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
