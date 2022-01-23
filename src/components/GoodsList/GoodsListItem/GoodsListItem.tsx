import React from "react";
import s from './GoodsListItem.module.scss'
import { Button, Radio } from "antd";
import { PlusOutlined } from "@ant-design/icons";

type TGoodsListItemProps = {
   img: string
   name: string
   option1?: Array<string>
   selected1?: number
   option2?: Array<string>
   selected2?: number
   price: number
   added: number
}

const GoodsListItem = (props: TGoodsListItemProps) => {
   const onTypeChanged = (e: any) => {
      console.log(e.target.value)
   }
   const onSizeChanged = () => {
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
                  size="small"
                  defaultValue={props.selected1}
                  onChange={onTypeChanged}>
                     {props.option1.map((item, index) => {
                        return (
                           <Radio.Button key={index + item} value={index}>{item}</Radio.Button>
                        )
                     })}
               </Radio.Group>}
            </div>
            <div className={s.goods_list_item_options__type}>
               {props.option2 && <Radio.Group buttonStyle="solid"
                  size="small"
                  defaultValue={props.selected2}
                  onChange={onTypeChanged}>
                     {props.option2.map((item, index) => {
                        return (
                           <Radio.Button key={index + item} value={index}>{item}</Radio.Button>
                        )
                     })}
               </Radio.Group>}
            </div>
         </div>
         <div className={s.goods_list_item_footer}>
            <div className={s.goods_list_item_footer__price}>
               от {props.price} ₽
            </div>
            <div className={s.goods_list_item_footer__add_btn}>
               <Button type="primary" shape="round" icon={<PlusOutlined />}>
                  Добавить
               </Button>
            </div>
         </div>
      </div>
   )
}

export default GoodsListItem