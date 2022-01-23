import React from "react";
import GoodsListItem from "./GoodsListItem/GoodsListItem";
import s from './GoodsList.module.scss'
import classic from '../../assets/img/shaverma/classic.jpg'
import greek from '../../assets/img/shaverma/greek.jpg'
import mexican from '../../assets/img/shaverma/mexican.jpg'
import veg from '../../assets/img/shaverma/veg.jpg'
import pot_free from '../../assets/img/snacks/pot-free.jpg'
import pot_country from '../../assets/img/snacks/pot-country.jpg'
import nuggets from '../../assets/img/snacks/nuggets.jpg'
import sauce from '../../assets/img/snacks/sauce.jpg'
import cup from '../../assets/img/drinks/cup.jpg'


const GoodsList = () => {
   return (
      <div className={s.goods_list}>
         <h2 className={s.goods_list_title}>Всё меню</h2>
         <div className={s.goods_list_items}>
            <GoodsListItem img={classic} name="Классическая" 
                           option1={["обычный лаваш", "сырный лаваш"]} selected1={0}
                           option2={["маленькая", "средняя", "большая"]} selected2={1} 
                           price={190} added={0} 
            />
            <GoodsListItem img={greek} name="Греческая" 
                           option1={["обычный лаваш", "сырный лаваш"]} selected1={0}
                           option2={["маленькая", "средняя", "большая"]} selected2={1} 
                           price={230} added={0} 
            />
            <GoodsListItem img={mexican} name="Мексиканская" 
                           option1={["обычный лаваш", "сырный лаваш"]} selected1={0}
                           option2={["маленькая", "средняя", "большая"]} selected2={1} 
                           price={230} added={0} 
            />
            <GoodsListItem img={veg} name="Вегетарианская" 
                           option1={["обычный лаваш", "сырный лаваш"]} selected1={0}
                           option2={["маленькая", "средняя", "большая"]} selected2={1} 
                           price={170} added={0} 
            />
            <GoodsListItem img={pot_free} name="Картошка фри" 
                           option1={["маленькая", "большая"]} selected1={0}
                           price={130} added={0} 
            />
            <GoodsListItem img={pot_country} name="Картошка по-деревенски" 
                           option1={["маленькая", "большая"]} selected1={0}
                           price={150} added={0} 
            />
            <GoodsListItem img={nuggets} name="Наггетсы" 
                           option1={["маленькие", "большие"]} selected1={0}
                           price={170} added={0} 
            />
            <GoodsListItem img={sauce} name="Соус" 
                           option1={["кетчуп", "сырный"]} selected1={0}
                           price={30} added={0} 
            />
            <GoodsListItem img={cup} name="Кофе" 
                           option1={["маленький", "большой"]} selected1={0}
                           price={120} added={0} 
            />
            <GoodsListItem img={cup} name="Чай" 
                           option1={["маленький", "большой"]} selected1={0}
                           price={90} added={0} 
            />
         </div>
      </div>
   )
}

export default GoodsList