import { CloseCircleOutlined, DeleteOutlined, LeftOutlined, MinusCircleOutlined, PlusCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Divider } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { Link } from "react-router-dom";
import { clearCart, decreaseItemAmount, increaseItemAmount, recalculateCountAndSum, removeItemFromCart } from "../../redux/actions/cart";
import { TCartState } from "../../redux/reducers/cart";
import { AppDispatch } from "../../redux/store";
import s from './Cart.module.scss'

type TCartProps = {
   cart: TCartState
   dispatch: AppDispatch
}

type TCartItemProps = {
   cartIndex: number
   name: string
   img: string
   option1?: string | null
   option2: string
   count: number
   price: number
   dispatch: AppDispatch
}

const CartItem = ({cartIndex, name, img, option1, option2, count, price, dispatch}: TCartItemProps) => {
   const onClickDecrease = () => {
      dispatch(decreaseItemAmount(cartIndex))
      dispatch(recalculateCountAndSum())
   }

   const onClickIncrease = () => {
      dispatch(increaseItemAmount(cartIndex))
      dispatch(recalculateCountAndSum())
   }

   const onClickRemove = () => {
      dispatch(removeItemFromCart(cartIndex))
      dispatch(recalculateCountAndSum())
   }

   return (
      <div className={s.cart_item}>
         <div className={s.cart_item__img}>
            <img src={img} alt="shaverma" />
         </div>
         <div className={s.cart_item__decription}>
            <div className={s.cart_item__title}>
               {name}
            </div>
            <div className={s.cart_item__options}>
               {option1 ? option1 + ', ': ''}{option2}
            </div>
         </div>
         <div className={s.cart_item__quantity}>
            <button onClick={onClickDecrease} className={s.cart_item_btn}>
               <MinusCircleOutlined className={s.cart_item__quantity_btn} /> 
            </button>
            <span className={s.cart_item__quantity_number}>{count}</span>
            <button onClick={onClickIncrease} className={s.cart_item_btn}>
               <PlusCircleOutlined className={s.cart_item__quantity_btn} />
            </button>
         </div>
         <div className={s.cart_item__sum}>
            {price * count} ₽
         </div>
         <div className={s.cart_item__delete}>
            <button onClick={onClickRemove} className={s.cart_item_btn}>
               <CloseCircleOutlined />
            </button>
         </div>
      </div>
   )
}

const Cart = ({ cart, dispatch }: TCartProps) => {

   const onClickClearCart = () => {
      dispatch(clearCart())
      dispatch(recalculateCountAndSum())
   }

   return (
      <div className={s.cart_wrapper}>
         <div className={s.cart_header}>
            <div className={s.cart_header_title}>
               <Title level={3}>
                  <ShoppingCartOutlined /> Корзина
               </Title>
            </div>
            <div className={s.cart_header_clear}>
               <Button onClick={onClickClearCart} className={s.cart_clear_btn} type="link" danger shape="round" size={"middle"}>
                  <DeleteOutlined /><span className={s.cart_clear_btn__text}>Очистить корзину</span>
               </Button>
            </div>
         </div>
         <Divider className={s.cart_divider}/>
         <div className={s.cart_items_list}>
            {cart.items.map((el, i) => <CartItem
                                    key={'' + el.id + el.option1 + el.option2}
                                    cartIndex={i}
                                    name={el.name}
                                    img={el.img}
                                    option1={el.option1}
                                    option2={el.option2}
                                    count={el.count}
                                    price={el.price}
                                    dispatch={dispatch} />)}
         </div>
         <div className={s.cart_total}>
            <div className={s.cart_total_counter}>
               Всего позиций: <span>{cart.totalCount}</span>
            </div>
            <div className={s.cart_total_sum}>
               На сумму: <span>{cart.totalSum} ₽</span>
            </div>
         </div>
         <Divider className={s.cart_divider}/>
         <div className={s.cart_footer}>
            <Link to='/' >
               <Button className={s.cart_back_btn} type="default" danger shape="round" size={"middle"}>
                  <LeftOutlined /><span className={s.cart_back_btn__text}>Назад к меню</span>
               </Button>
            </Link>
            <Button className={s.cart_accept_btn} type="primary" shape="round" size={"middle"}>
               <span className={s.cart_accept_btn__text}>Оформить заказ</span>
            </Button>
         </div>
      </div>
   )
}

export default Cart