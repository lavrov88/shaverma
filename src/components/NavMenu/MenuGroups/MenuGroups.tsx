import React from "react";
import { Radio } from "antd";
import s from '../Menu.module.scss'
import { setCategory } from "../../../redux/actions/navMenu";
import { AppDispatch } from "../../../redux/store";

type TMenuGroups = {
   category: string
   dispatch: AppDispatch
}

const MenuGroups = (props: TMenuGroups) => {

   const onMenuChanged = (e: any) => {
      props.dispatch(setCategory(e.target.value))
   }

   return (
      <div className={s.menu_groups}>
            <Radio.Group className={s.menu_groups__items} 
                         buttonStyle="solid" 
                         defaultValue={props.category} 
                         size="large"
                         onChange={onMenuChanged}>
               <Radio.Button value="all">Всё</Radio.Button>
               <Radio.Button value="shaverma">Шаурма</Radio.Button>
               <Radio.Button value="snacks">Закуски</Radio.Button>
               <Radio.Button value="drinks">Напитки</Radio.Button>
            </Radio.Group>
         </div>
   )
}

export default MenuGroups