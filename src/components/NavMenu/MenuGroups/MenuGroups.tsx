import React from "react";
import { Radio } from "antd";
import s from '../Menu.module.scss'
import '../Menu.scss'


const MenuGroups = () => {
   
   const [filter, setFilter] = React.useState('all')

   const onMenuChanged = (e: any) => {
      setFilter(e.target.value)
      console.log(e.target.value)
   }

   return (
      <div className={s.menu_groups}>
            <Radio.Group className={s.menu_groups__items} 
                         buttonStyle="solid" 
                         defaultValue="all" size="large"
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