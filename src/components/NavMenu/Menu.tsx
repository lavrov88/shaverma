import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Radio } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import s from './Menu.module.scss'
import MenuGroups from "./MenuGroups/MenuGroups";
import MenuSorting from "./MenuSorting/MenuSorting";

const NavMenu = () => {

   const dispatch = useDispatch()

   const state = useSelector((state: RootState) => {
      return {
         category: state.navMenu.category,
         sortBy: state.navMenu.sortBy
      }
   })

   return (
      <nav className={s.menu}>
         <MenuGroups dispatch={dispatch} category={state.category} />
         <MenuSorting dispatch={dispatch} sortBy={state.sortBy} />
      </nav>
   )
}

export default NavMenu