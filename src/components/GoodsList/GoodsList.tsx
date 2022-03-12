import React from "react";
import GoodsListItem from "./GoodsListItem/GoodsListItem";
import s from './GoodsList.module.scss'
import NavMenu from "../NavMenu/Menu";
import getItemLoaderArray from "./GoodsListItem/GoodsListLoaderItem";
import { TMenuItem } from "../../redux/reducers/shavermas";
import { AppDispatch } from "../../redux/store";
import { TCardItem } from "../../redux/reducers/cart";

type TGoodListProps = {
   isLoading: boolean
   menuData: Array<TMenuItem>
   cartItems: Array<TCardItem>
   dispatch: AppDispatch
}

const GoodsList = (props: TGoodListProps) => {

   return (
      <div>
         <NavMenu />
         <div>
            <div className={s.goods_list}>
               <div className={s.goods_list_items}>
                  {props.isLoading && getItemLoaderArray(9)}
                  {!props.isLoading && props.menuData.map((el) => <GoodsListItem id={el.id} 
                                                   key={el.id + el.name}
                                                   name={el.name} 
                                                   option1={el.option1}
                                                   option2={el.option2} 
                                                   type={el.type} 
                                                   img={el.img}
                                                   cartItems={props.cartItems}
                                                   dispatch={props.dispatch} />)}
               </div>
            </div>
         </div>
      </div>
      
   )
}

export default GoodsList