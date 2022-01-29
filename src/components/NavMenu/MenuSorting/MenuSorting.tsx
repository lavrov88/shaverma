import React, { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { TSortingName } from "../../../common/types";

const MenuSorting = () => {

   const [activeSorting, setActiveSorting]: Array<any> = useState('popularity')

   const onSortingChanged = (e: any) => {
      setTimeout(() => {
         setActiveSorting(e.key)
      }, 200) // timeout for better menu dissapearing animation
   }

   const sorting = (
      <Menu onClick={onSortingChanged} selectedKeys={[activeSorting]}>
         <Menu.Item key="popularity">популярности</Menu.Item>
         <Menu.Item key="price">цене</Menu.Item>
         <Menu.Item key="alphabet">алфавиту</Menu.Item>
      </Menu>
   )

   const returnSortingLabel = (sortingName: TSortingName) => {
      if (sortingName === 'popularity') {
         return 'популярности'
      }
      if (sortingName === 'price') {
         return 'цене'
      }
      if (sortingName === 'alphabet') {
         return 'алфавиту'
      }
   }

   return (
      <div className="menu_sorting">
         Сортировка по:
         <Dropdown overlay={sorting} trigger={['click']} placement="bottomRight" >
            <Button type="link">
               {returnSortingLabel(activeSorting)} <DownOutlined />
            </Button>
         </Dropdown>
      </div>
   )
}

export default MenuSorting