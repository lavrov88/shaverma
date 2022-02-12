import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Divider, PageHeader } from "antd";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import s from './Header.module.scss'
import logoImg from '../../assets/img/logo.png'
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

type TCartButton = {
   link: string
   totalCount: number
   totalSum: number
}

const CartButton: React.FC<TCartButton> = ({ link, totalCount, totalSum }) => {
   return (
      <Link to={link} >
         <Button className={s.cart_quantity_btn} type="primary" shape="round" size={'large'}>
            <div>{totalCount}<ShoppingCartOutlined /></div>
            <div className={s.cart_quantity_btn__divider}>|</div>
            <div>{totalSum} ₽</div>
         </Button>
      </Link>
   )
}

const Header = () => {
   const { totalCount, totalSum } = useSelector((state: RootState) => ({
      totalCount: state.cart.totalCount,
      totalSum: state.cart.totalSum,
   }))

   return (
      <div>
         <header className={s.header}>
            <div className={s.header_left}>
               <Link to='/'  className={s.header_logo} >
                  <img src={logoImg} alt="logo" />
                  <h1 className={s.header_logo__title}>Reactive shaverma</h1>
               </Link>
            </div>
            <div className={s.header_cart}>
               <Routes>
                  <Route path='/cart' element={ <CartButton link='/' totalCount={totalCount} totalSum={totalSum} /> } />
                  <Route path='/*' element={ <CartButton link='/cart' totalCount={totalCount} totalSum={totalSum} /> } />
               </Routes>
            </div>
         </header>
         <Divider />
      </div>
   )
}

export default Header