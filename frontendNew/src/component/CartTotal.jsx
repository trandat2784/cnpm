import React, { useContext } from 'react'
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
    const{currency,delivery_fee, getCartAmount} = useContext(ShopContext)
  return (

          <div class="w-full">
            <div class="text-2xl">
              <Title text1={"CART"} text2={"TOTALS"} />
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>
                  {currency}
                  {getCartAmount()}.00
                </p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Shipping Fee</p>
                <p>
                  {currency}
                  {delivery_fee}
                </p>
              </div>
              <hr />
              <div className="flex justify-between">
                <b>Total</b>
                <b>{currency}{getCartAmount()===0?0:getCartAmount()+delivery_fee}</b>
              </div>
            </div>
          </div>
  );
}

export default CartTotal
