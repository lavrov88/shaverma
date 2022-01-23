import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Radio } from "antd";
import React from "react";
import s from './Menu.module.scss'

const NavMenu = () => {
   const onMenuChanged = (e: any) => {
      console.log(e.target.value)
   }

   const onSortingChanged = (e: any) => {
      console.log(e.key)
   }

   const sorting = (
      <Menu onClick={onSortingChanged}>
         <Menu.Item key="popularity">популярности</Menu.Item>
         <Menu.Item key="price">цене</Menu.Item>
         <Menu.Item key="alphabet">алфавиту</Menu.Item>
      </Menu>
   )

   return (
      <nav className={s.menu}>
         <div className={s.menu_groups}>
            <Radio.Group className={s.menu_groups__items} 
                         buttonStyle="solid" 
                         defaultValue="all" size="middle"
                         onChange={onMenuChanged}>
               <Radio.Button value="all">Всё</Radio.Button>
               <Radio.Button value="shaverma">Шаурма</Radio.Button>
               <Radio.Button value="snacks">Закуски</Radio.Button>
               <Radio.Button value="drinks">Напитки</Radio.Button>
            </Radio.Group>
         </div>
         <div className="menu_sorting">
            Сортировка по: 
            <Dropdown overlay={sorting} trigger={['click']}>
               <Button type="link">
                  популярности <DownOutlined />
               </Button>
            </Dropdown>
         </div>
      </nav>
   )
}

export default NavMenu