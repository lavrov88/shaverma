import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Radio } from "antd";
import React from "react";
import s from './Menu.module.scss'
import MenuGroups from "./MenuGroups/MenuGroups";
import MenuSorting from "./MenuSorting/MenuSorting";

const NavMenu = () => {

   return (
      <nav className={s.menu}>
         <MenuGroups />
         <MenuSorting />
      </nav>
   )
}

export default NavMenu