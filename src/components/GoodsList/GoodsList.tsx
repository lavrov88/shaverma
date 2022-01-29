import React from "react";
import GoodsListItem from "./GoodsListItem/GoodsListItem";
import s from './GoodsList.module.scss'
import NavMenu from "../NavMenu/Menu";

const GoodsList = (props: any) => {
   return (
      <div>
         <NavMenu />
         <main>
            <div className={s.goods_list}>
               <h2 className={s.goods_list_title}>Всё меню</h2>
               <div className={s.goods_list_items}>
                  {props.menuData.map((el: any) => <GoodsListItem id={el.id} 
                                                   key={el.id + el.name}
                                                   name={el.name} 
                                                   option1={el.option1} 
                                                   option2={el.option2} 
                                                   type={el.type} 
                                                   img={el.img} />)}
               </div>
            </div>
         </main>
      </div>
   )
}

export default GoodsList