import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Divider, PageHeader } from "antd";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import s from './Header.module.scss'
import logoImg from '../../assets/img/logo.png'

type TCartButton = {
   link: string
}

const CartButton: React.FC<TCartButton> = ({ link }) => {
   return (
      <Link to={link} >
         <Button className={s.cart_quantity_btn} type="primary" shape="round">
            3<ShoppingCartOutlined /> | 520 ₽
         </Button>
      </Link>
   )
}

const Header = () => {
   return (
      <div>
         <header className={s.header}>
            <div className={s.header_left}>
               <Link to='/'  className={s.header_logo} >
                  <img src={logoImg} alt="logo" />
                  <PageHeader className={s.header_logo__title} title="Reactive shaverma" />
                  {/* <h1>Reactive shaverma</h1> */}
               </Link>
            </div>
            <div className={s.header_cart}>
               <Routes>
                  <Route path='/cart' element={ <CartButton link='/' /> } />
                  <Route path='/*' element={ <CartButton link='/cart' /> } />
               </Routes>
            </div>
         </header>
         <Divider />
      </div>
   )
}

export default Header