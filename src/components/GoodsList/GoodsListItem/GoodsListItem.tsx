import React from "react";
import s from './GoodsListItem.module.scss'
import { Button, Radio } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import './GoodsListItem.scss'
import { AppDispatch } from "../../../redux/store";
import { addItemToCart, recalculateCountAndSum } from "../../../redux/actions/cart";
import { TCardItem } from "../../../redux/reducers/cart";

type TOptionWithPrice = {
   name: string
   price: number
}

export type TGoodsListItemProps = {
   id: number
   name: string
   option1?: Array<string>
   selected1?: number
   option2: Array<TOptionWithPrice>
   selected2?: number
   type: string
   img: string
   cartItems: Array<TCardItem>
   dispatch: AppDispatch
}

const AddButtonCounter = ({ count }: { count: number }) => {
   if (count > 0) {
      return (
         <span className={s.add_btn_counter}>{count}</span>
      )
   } else {
      return null
   }
}

const GoodsListItem = (props: TGoodsListItemProps) => {

   let [valueOpt1, setValueOpt1] = React.useState(0)
   let [valueOpt2, setValueOpt2] = React.useState(1)

   const onOption1Changed = (e: any) => {
      setValueOpt1(e.target.value)
   }

   const onOption2Changed = (e: any) => {
      setValueOpt2(e.target.value)
   }
   
   const addedCounter = props.cartItems.reduce((sum, item) => item.id === props.id
                                                            ? sum + item.count
                                                            : sum, 0)

   const onAddClick = () => {
      props.dispatch(addItemToCart({ 
         id: props.id, 
         name: props.name, 
         img: props.img, 
         option1: props.option1 ? props.option1[valueOpt1]: null,
         option2: props.option2[valueOpt2].name, 
         price: props.option2[valueOpt2].price }))
      props.dispatch(recalculateCountAndSum())
   }

   return (
      <div className={s.goods_list_item}>
         <div className={s.goods_list_item_img}>
            <img src={props.img} alt="shaverma" />
         </div>
         <div className={s.goods_list_item_name}>
            {props.name}
         </div>
         <div className={s.goods_list_item_options}>
            <div className={s.goods_list_item_options__type}>
               {props.option1 && <Radio.Group buttonStyle="solid"
                  className='option1'
                  size="small"
                  defaultValue={valueOpt1}
                  onChange={onOption1Changed}>
                     {props.option1.map((item, index) => {
                        return (
                           <Radio.Button key={index + item} value={index}>{item}</Radio.Button>
                        )
                     })}
               </Radio.Group>}
            </div>
            <div className={s.goods_list_item_options__type}>
               {props.option2 && <Radio.Group buttonStyle="solid"
                  className='option2'
                  size="small"
                  defaultValue={valueOpt2}
                  onChange={onOption2Changed}>
                     {props.option2.map((item, index) => {
                        return (
                           <Radio.Button key={index + item.name} value={index}>{item.name}</Radio.Button>
                        )
                     })}
               </Radio.Group>}
            </div>
         </div>
         <div className={s.goods_list_item_footer}>
            <div className={s.goods_list_item_footer__price}>
               {props.option2[valueOpt2].price} ₽
            </div>
            <div className={s.goods_list_item_footer__add_btn}>
               <Button onClick={onAddClick} type="primary" shape="round" icon={<PlusOutlined />}>
                  Добавить <AddButtonCounter count={addedCounter} />
               </Button>
            </div>
         </div>
      </div>
   )
}

export default GoodsListItem