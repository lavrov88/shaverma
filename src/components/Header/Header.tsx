import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import s from './Header.module.scss'

const Header = () => {
   return (
      <header className={s.header}>
         <div className={s.header_logo}>
            <h1>Reactive shaverma</h1>
         </div>
         <div className={s.header_cart}>
            <Button className="cart_quantity_btn" type="primary" shape="round">
               3<ShoppingCartOutlined /> | 520 ₽
            </Button>
         </div>
      </header>
   )
}

export default Header