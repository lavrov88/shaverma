import React from "react";
import s from './GoodsListItem.module.scss'
import { Button, Radio } from "antd";
import { PlusOutlined } from "@ant-design/icons";

type TOptionWithPrice = {
   name: string
   price: number
}

type TGoodsListItemProps = {
   id: number
   name: string
   option1?: Array<string>
   selected1?: number
   option2: Array<TOptionWithPrice>
   selected2?: number
   type: string
   img: string
   added?: number
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
               <Button type="primary" shape="round" icon={<PlusOutlined />}>
                  Добавить
               </Button>
            </div>
         </div>
      </div>
   )
}

export default GoodsListItem