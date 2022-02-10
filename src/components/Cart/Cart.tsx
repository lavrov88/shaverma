import { CloseCircleOutlined, DeleteOutlined, LeftOutlined, MinusCircleOutlined, PlusCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Divider, Modal } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { clearCart, decreaseItemAmount, increaseItemAmount, recalculateCountAndSum, removeItemFromCart } from "../../redux/actions/cart";
import { TCartState } from "../../redux/reducers/cart";
import { AppDispatch } from "../../redux/store";
import s from './Cart.module.scss'
import emptyCardImg from '../../assets/img/empty_cart_cut.jpg'

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

export const EmptyCart = () => {
   return (
      <div className={s.cart_wrapper}>
         <div className={s.cart_header}>
            <div className={s.cart_header_title + ' ' + s.empty_cart_title}>
               <Title level={2}>
                  Корзина пока пуста...
               </Title>
            </div>
         </div>
         <div className={s.cart_items_list}>
            <p className={s.empty_cart_text}>Вы ещё ничего не добавили в корзину, но можете выбрать что-нибудь в разделе меню.</p>
            <img className={s.empty_cart_img} src={emptyCardImg} alt="empty cart" />
         </div>
         <div className={s.cart_footer + ' ' + s.empty_cart_footer}>
            <Link to='/' >
               <Button className={s.cart_back_btn} type="default"  shape="round" size={"large"}>
                  <LeftOutlined /><span className={s.cart_back_btn__text}>Вернуться к меню</span>
               </Button>
            </Link>
         </div>
      </div>
   )
}

const Cart = ({ cart, dispatch }: TCartProps) => {

   const [isModalVisible, setIsModalVisible] = useState(false)
   const [isOrderAccepted, setIsOrderAccepted] = useState(false)
   const navigate = useNavigate()

   const onClickClearCart = () => {
      dispatch(clearCart())
      dispatch(recalculateCountAndSum())
   }

   if (cart.totalCount === 0) {
      return <EmptyCart />
   }

  const showModal = () => {
    setIsModalVisible(true);
  }

   const handleSubmit = () => {
      setIsOrderAccepted(true)
      setTimeout(() => {
         dispatch(clearCart())
         dispatch(recalculateCountAndSum())
         setIsModalVisible(false)
         navigate('/')
      }, 1500)
   }

   const handleCancel = () => {
      setIsModalVisible(false)
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
               Всего позиций: <span className={s.cart_big_digits + ' ' + s.cart_big_digits_ml}>{cart.totalCount}</span>
            </div>
            <div className={s.cart_total_sum}>
               На сумму: <span className={s.cart_big_digits + ' ' + s.cart_big_digits_ml}>{cart.totalSum} ₽</span>
            </div>
         </div>
         <Divider className={s.cart_divider}/>
         <div className={s.cart_footer}>
            <Link to='/' >
               <Button className={s.cart_back_btn} type="default" danger shape="round" size={"middle"}>
                  <LeftOutlined /><span className={s.cart_back_btn__text}>Назад к меню</span>
               </Button>
            </Link>
            <Button onClick={showModal} className={s.cart_accept_btn} type="primary" shape="round" size={"middle"}>
               <span className={s.cart_accept_btn__text}>Оформить заказ</span>
            </Button>
         </div>

         <Modal title={isOrderAccepted ? "Спасибо!" : "Пожалуйста, подтвердите ваш заказ"} 
            visible={isModalVisible}
            onOk={handleSubmit} onCancel={handleCancel}
            footer={!isOrderAccepted 
               ? [
                  <Button key="back" onClick={handleCancel} className={s.cart_accept_btn + ' ' + s.cart_modal_btn}
                     type="default" shape="round" >
                     Отмена
                  </Button>,
                  <Button key="back" onClick={handleSubmit} className={s.cart_accept_btn + ' ' + s.cart_modal_btn}
                     type="primary" shape="round" >
                     Подтверждаю
                  </Button>
               ]
               : []}>
            {!isOrderAccepted && <div>
               <p>Общая сумма заказа составляет <span className={s.cart_big_digits}>{cart.totalSum} ₽</span></p>
               <p>Курьер сможет доставить его в течение часа</p>
            </div>}
            {isOrderAccepted && <div>
               <p>Мы начали готовить ваш заказ</p>
            </div>}
         </Modal>
         
      </div>
   )
}

export default Cart