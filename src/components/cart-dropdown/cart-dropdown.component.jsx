import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
/* 
  import { withRouter } from 'react-router-dom'
  не работаеет с v6
  нужно использовать useNavigate
 */

import { useNavigate } from "react-router-dom";

import CartItem from '../cart-item/cart-item.component';
import { createStructuredSelector } from 'reselect'
import CustomButton from '../custom-button/custom-button.component';


import './cart-dropdown.style.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { click } from '@testing-library/user-event/dist/click';


const CartDropdown = ({ cartItems, toggleCartHidden }) => {
  let navigate = useNavigate();

  async function handleClick(event) {
    event.preventDefault();
    /* await click(event.target); */
    navigate("/checkout", { replace: true });
    toggleCartHidden()
  }


  return (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ?
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        :
        <span className='empty-message'>
          Your cart is empty.
        </span>
      }
    </div>
    <CustomButton
      onClick={handleClick}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartDropdown);